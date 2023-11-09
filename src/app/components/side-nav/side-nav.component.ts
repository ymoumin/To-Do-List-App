import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isActive: any;
  hide = true;
  user:string = localStorage.getItem('cashedUsername');



  constructor(private _routes: Router) {}

  //remove default routes from array (slice first 4) + replace "tasks/:username" by tasks/this.user to focus correct route
  protected readonly routes =  [this._routes.config.slice(4)[0].path.split(':')[0]+this.user,this._routes.config.slice(4)[1].path];

  protected readonly console = console;
}
