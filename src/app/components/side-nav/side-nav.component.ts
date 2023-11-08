import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ITask} from '../../model/task.model';
import {AuthenticationService} from '../../services/users/authentication.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isActive: any;
  hide = true;
  user:string = localStorage.getItem('cashedUsername');



  constructor(private _authenticationService : AuthenticationService, private _routes: Router) {}

  //remove default routes from array (slice first 4) + replace "tasks/:username" by tasks/this.user to focus correct route
  protected readonly routes =  [this._routes.config.slice(4)[0].path.split(':')[0]+this.user,this._routes.config.slice(4)[1].path];

  protected readonly console = console;
}
