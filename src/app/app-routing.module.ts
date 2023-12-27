import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCardComponent } from './components/tasks/task-card/task-card.component';
import {ProfileComponent} from './components/users/profile/profile.component';
import {LogInComponent} from './components/users/log-in/log-in.component';
import {TaskDashboardComponent} from './components/tasks/task-dashboard/task-dashboard.component';
import {SignInComponent} from './components/users/sign-in/sign-in.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';

let routes: Routes = [
    { path: '', redirectTo:'home',pathMatch:'full' },
    { path: 'home', component: LogInComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'nav', component: SideNavComponent },
    { path: 'tasks/:username', component: TaskDashboardComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TaskCardComponent,LogInComponent,SignInComponent,TaskDashboardComponent,ProfileComponent]
