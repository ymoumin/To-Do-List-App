import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from './services/users/authentication.service';
import {routingComponents} from './app-routing.module';
import {IUser} from './model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navigationIndex: string;
  cashedUsername:string='';
  cashedEmail:string='';
  cashedAvatar:string='';
  protected routes: Router;

  constructor(protected _router: Router, private _authenticationService : AuthenticationService, private _snackBar: MatSnackBar) {
    //this.pages = this._router.getCurrentNavigation().id;
    //localStorage.setItem("cashedUsername", '');

    this._router.events.subscribe((e) => {

      this.cashedUsername = localStorage.getItem("cashedUsername");
      this.cashedEmail = localStorage.getItem("cashedEmail");
      this.cashedAvatar = localStorage.getItem("cashedAvatar");

      if (e instanceof NavigationEnd) {
        this.navigationIndex = e.url;

        console.log(e.url);
        console.log(this.cashedUsername);

        //initial redirect
        if((this.cashedUsername=='' || !this.cashedUsername) && e.url!='sign-in'){
          this.navigationIndex = 'home';
        }
        //if user is logged in (cashed) don't let him see login page
        else if((this.cashedUsername!='' && this.cashedUsername) && (e.url != 'tasks/'+this.cashedUsername && e.url !='profile')){
          // window.addEventListener("beforeunload", function (e) {
          //   e.returnValue = "\o/";     // Gecko, Trident, Chrome 34+
          // });
          //this.navigationIndex = '/tasks/'+this.cashedUser;
          this._router.navigateByUrl(`tasks/${this.cashedUsername}`);
        }
      }

    });
  }

  logout(){
    this._snackBar.open(`You have succesfully logged out`, 'Dismiss', {duration:1000});
    localStorage.setItem("cashedUsername", "");
    this._router.navigateByUrl(`/home`);
  }

  authorized(user:IUser){
    //cash user to save login
    localStorage.setItem("cashedUsername", user.userName);
    localStorage.setItem("cashedEmail", user.email);
    localStorage.setItem("cashedPassword", user.password);

    this._router.navigateByUrl(`/tasks/${user.userName}`);
  }

  ngOnInit() {
  }


  protected readonly routingComponents = routingComponents;
}
