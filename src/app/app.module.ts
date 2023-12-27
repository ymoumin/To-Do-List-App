import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DeleteTaskDialog, EditTaskDialog, TaskCardComponent} from './components/tasks/task-card/task-card.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './services/tasks/task.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterLink} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { LogInComponent } from './components/users/log-in/log-in.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import {DeleteUserDialog, ProfileComponent} from './components/users/profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {AddTaskDialog, TaskDashboardComponent} from './components/tasks/task-dashboard/task-dashboard.component';
import {CdkDrag, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {CdkTableModule} from '@angular/cdk/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AddTaskDialog,
    AppComponent,
    routingComponents,
    LogInComponent,
    SignInComponent,
    ProfileComponent,
    SideNavComponent,
    TaskDashboardComponent,
    DeleteTaskDialog,
    EditTaskDialog,
    TaskCardComponent,
    LogInComponent,
    SignInComponent,
    DeleteUserDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterLink,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    CdkDropList,
    CdkDrag,
    DragDropModule,
    MatDialogModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    CdkTableModule,
    MatMenuModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  providers: [TaskService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
}

