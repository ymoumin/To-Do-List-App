import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/users/authentication.service';
import {Subject, SubscriptionLike} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css','../log-in/log-in.component.css']
})
export class SignInComponent {

  hide1 = true;
  hide2 = true;

  show = false;

  @Output()
  loggedIn = new EventEmitter<any>();

  //form definition & input validation
  user = new FormGroup({
      userName: new FormControl(null,[Validators.minLength(5),Validators.required]),
      email: new FormControl(null,[Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$'),Validators.required]),
      password: new FormControl(null,Validators.pattern('^(?=.*[a-z].*[a-z])(?=.*[!"#...\\d].*[!"#...\\d]).{8,}$')),
      confirmedPassword: new FormControl(null,Validators.required)
  },
    { validators: [this.userExists('userName'),this.userExists('email'),this.matchValidator('password', 'confirmedPassword')]}
  );

  createUser:SubscriptionLike;
  getUser:SubscriptionLike;

  emailAlreadyExists = false;
  usernameAlreadyExists = false;
  firstView = false;

  constructor(private _authenticationService : AuthenticationService,private changeDetectorRef: ChangeDetectorRef) {}

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

  test(){
    this.show = true;
    console.log(this.show);
  }

  ngAfterViewInit() {

    this.changeDetectorRef.detectChanges();
    this.firstView = true;
  }

  userExists(controlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);

      if (control!.errors && !control!.errors?.['existsValidator']) {
        return null;
      }

      if(this.emailAlreadyExists || this.usernameAlreadyExists){
        const error = { existsValidator: 'User already Exists.' };
        control!.setErrors(error);
        return error;
      }else {
        control!.setErrors(null);
        return null;
      }
    }
  }

  retrieveName(){
    this.getUser = this._authenticationService.getUser(this.user.value.userName).subscribe((res)=>{
      this.usernameAlreadyExists = res != undefined;
    })
  }

  retrieveEmail(){
    this.getUser = this._authenticationService.get(this.user.value.email).subscribe((res)=>{
      this.emailAlreadyExists = res != undefined;
    })
  }


  onSubmit(){
    if(this.user.valid && !this.emailAlreadyExists && !this.usernameAlreadyExists) {
      this.createUser = this._authenticationService.create(this.user.value).subscribe(() => {
        this.loggedIn.emit(this.user.value);
      })
    }
  }

  ngOnDestroy(){
    if(this.createUser){
      this.createUser.unsubscribe();
    }
  }
}
