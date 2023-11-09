import {Component, EventEmitter, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/users/authentication.service';
import {SubscriptionLike} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css','../log-in/log-in.component.css']
})
export class SignInComponent {

  hide1 = true;
  hide2 = true;

  @Output()
  loggedIn = new EventEmitter<any>();

  //form definition & input validation
  user = new FormGroup({
      userName: new FormControl(null,Validators.minLength(5)),
      email: new FormControl(null,[Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$'),Validators.required]),
      password: new FormControl(null,Validators.pattern('^(?=.*[a-z].*[a-z])(?=.*[!"#...\\d].*[!"#...\\d]).{8,}$')),
      confirmedPassword: new FormControl(null,Validators.required)
  },
    { validators: [this.userExists('email'),this.matchValidator('password', 'confirmedPassword')]}
  );

  //user: IUser;

  createUser:SubscriptionLike;
  getUser:SubscriptionLike;

  alreadyExists= false;

constructor(private _authenticationService : AuthenticationService) {}

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

  userExists(controlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);

      if (control!.errors && !control!.errors?.['existsValidator']) {
        return null;
      }

      if(this.alreadyExists){
        const error = { existsValidator: 'Email already Exists.' };
        control!.setErrors(error);
        return error;
      }else {
        control!.setErrors(null);
        return null;
      }
    }
  }

  retrieve(){
    this.getUser = this._authenticationService.get(this.user.value.email).subscribe((res)=>{
      this.alreadyExists = res != undefined;
      console.log(this.alreadyExists);
    })
  }


  onSubmit(){
    if(this.user.valid && !this.alreadyExists) {
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
