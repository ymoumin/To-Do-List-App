import {Component, Inject} from '@angular/core';
import {AuthenticationService} from '../../../services/users/authentication.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {TaskService} from '../../../services/tasks/task.service';
import {ITask} from '../../../model/task.model';
import {SubscriptionLike} from 'rxjs';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {IUser} from '../../../model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userP:IUser;

  edit: boolean = false;
  disabled: boolean = false;
  hide1 = true;
  hide2 = true;

  username:string = '';
  email:string = '';
  password:string = '';

  todo : ITask[] = [];
  inProgress: ITask[] = [];
  done: ITask[] = [];

  allTasks: ITask[] = [];

  getTasks: SubscriptionLike;
  isUpdated: SubscriptionLike;
  updateUser: SubscriptionLike;

  constructor(private _authenticationService : AuthenticationService,
              private _taskService: TaskService,
              protected _router: Router,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(){
    this.username = localStorage.getItem("cashedUsername");
    this.email = localStorage.getItem("cashedEmail");
    this.password = localStorage.getItem("cashedPassword");
    this.getAllTasks();
    this.getUser();
  }


  user = new FormGroup({
      userName: new FormControl(this.username,Validators.minLength(5)),
      email: new FormControl(this.email,Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$')),
      password: new FormControl(this.password,Validators.pattern('^(?=.*[a-z].*[a-z])(?=.*[!"#...\\d].*[!"#...\\d]).{8,}$')),
      confirmedPassword: new FormControl(this.password,Validators.required)
    },
    { validators: [this.matchValidator('password', 'confirmedPassword')]}
  );

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
        return null;
      }

      if (control!.value !== matchingControl!.value) {
        const error = { confirmedValidator: 'Passwords do not match.' };
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        return null;
      }
    }
  }

  enableEdit(){
    this.edit = !this.edit;
  }

  getUser(){
    this.isUpdated = this._authenticationService.get(this.user.value.email)
      .subscribe((result)=> {
        this.userP = result[0];
      });
  }

  getAllTasks(){
    this.getTasks = this._taskService.getAll()
      .subscribe(data => {
        this.allTasks = data.filter(d => d.username == this.username);

        this.todo = data.filter(d => d.status == 'TO DO' && d.username == this.username);
        this.inProgress = data.filter(d => d.status == 'DOING' && d.username == this.username);
        this.done = data.filter(d => d.status == 'DONE' && d.username == this.username);
      });
  }

  editUser(){
    if(this.user.valid) {
      this.updateUser = this._authenticationService.update(this.userP.id,this.user.value).subscribe((res) => {
        localStorage.setItem("cashedUsername",this.user.value.userName);
        localStorage.setItem("cashedEmail",this.user.value.email);
        localStorage.setItem("cashedPassword",this.user.value.password);
        this.username = this.user.value.userName;
        this.email = this.user.value.email;
        this.password = this.user.value.password;
        window.location.reload();
        this._snackBar.open(`User ${this.username} Updated`, 'Dismiss', {duration:1000});
      });
    }
  }

  isDiff(){
    this.isUpdated = this._authenticationService.get(this.user.value.email).pipe(take(1))
      .subscribe((result)=> {
        this.disabled = (result.userName !== this.username) || (result.email !== this.email) || (result.password !== this.password) ;
      });
  }

  logOut(){
    localStorage.setItem("cashedUsername", "");
    this._snackBar.open(`You have succesfully logged out`, 'Dismiss', {duration:1000});
    this._router.navigateByUrl(`/home`);
  }

  remove(){
    this.dialog.open(DeleteUserDialog, {
      disableClose:true,
      data: this.userP,
    });
  }

}

@Component({
  selector: 'delete-user-dialog',
  templateUrl: './delete-user-dialog.html',
  styleUrls: ['./profile.component.css']
})
export class DeleteUserDialog {

  deleteUser:SubscriptionLike;

  constructor(public dialogRef: MatDialogRef<DeleteUserDialog>,
              @Inject(MAT_DIALOG_DATA) public data: IUser,
              private _authenticationService : AuthenticationService,
              protected _router: Router,
              private _snackBar: MatSnackBar) {
  }

  onConfirm(){
    this.deleteUser = this._authenticationService.delete(this.data.id).subscribe((res)=> {
      console.log('User Deleted!', res);
      localStorage.setItem("cashedUsername", "");
      this._router.navigateByUrl(`/home`);
      this._snackBar.open(`User ${this.data.id} Deleted`, 'Dismiss', {duration:1000});
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }
}