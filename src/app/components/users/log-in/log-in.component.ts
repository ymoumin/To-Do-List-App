import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/users/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  getUser:SubscriptionLike;
  invalid= false;
  hide=true;

  user = new FormGroup({
    email: new FormControl(null, Validators.pattern('^[^\\.\\s][\\w\\-]+(\\.[\\w\\-]+)*@([\\w-]+\\.)+[\\w-]{2,}$')),
    password: new FormControl(null, Validators.required)
  })

  @Output()
  loggedIn = new EventEmitter<any>();

  @Output()
  signedIn = new EventEmitter<any>();

  constructor(private _authenticationService : AuthenticationService) {
  }

  reset(){
    this.invalid = false;
  }

  logIn(user:any){
    this.loggedIn.emit(user);
  }

  signIn(){
    this.signedIn.emit();
  }

  checkUser(){
    this.getUser = this._authenticationService.get(this.user.value.email).subscribe((res)=> {
      if(this.user.value.password === res?.password){
        this.logIn(res);
      }else{
        this.invalid = true;
      }
    })
  }

  ngOnInit(){

  }

  ngOnDestroy() {
   // this.getUser.unsubscribe();
  }

}
