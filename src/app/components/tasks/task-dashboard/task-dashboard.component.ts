import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {TaskService} from '../../../services/tasks/task.service';
import { ITask} from '../../../model/task.model';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent {

  username:string;
  todo : ITask[] = [];
  inProgress: ITask[] = [];
  done: ITask[] = [];

  allTasks: ITask[] = [];

  limit: number = 1;
  index: number = 0;
  longestCat;

  //observer subscriptions
  getTasks: SubscriptionLike;
  dialogRef: SubscriptionLike;
  sub: SubscriptionLike;


  handlePageEvent(e: PageEvent) {
    console.log(e.pageIndex);
    this.limit = e.pageSize;
    this.index = e.pageIndex;
    this.getAllTasks();
  }


  showEmpty:boolean = true;

  constructor(private _taskService: TaskService,public dialog: MatDialog,private route: ActivatedRoute,private _snackBar: MatSnackBar) {
    this.getAllTasks();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      console.log(this.username);
    });
    this.getAllTasks();
  }

  hidingEmpty(){
    this.showEmpty = false;
  }

  getAllTasks(){
    this.getTasks = this._taskService.getAll()
        .subscribe(data => {
          this.allTasks = data.filter(d => d.username == this.username);
          this.todo = data.filter(d => d.status == 'TO DO' && d.username == this.username);
          this.inProgress = data.filter(d => d.status == 'DOING' && d.username == this.username);
          this.done = data.filter(d => d.status == 'DONE' && d.username == this.username);

          let fC = this.todo.length > this.inProgress.length ? this.todo.length : this.inProgress.length;
          this.longestCat = fC > this.done.length ? fC : this.done.length;

          this.todo = data.filter(d => d.status == 'TO DO' && d.username == this.username).slice(this.limit == 1 ? (this.todo.length <= 1 ? 0 : -1 - this.index) : (this.todo.length <= 2 ? 0 : -2 - this.index * 2), this.limit === 1 ? this.todo.length - this.index  : this.todo.length - this.index * 2);
          this.inProgress = data.filter(d => d.status == 'DOING' && d.username == this.username).slice(this.limit === 1 ? (this.inProgress.length <= 1 ? 0 : -1 - this.index) : (this.inProgress.length <= 2 ? 0 : -2 - this.index * 2), this.limit === 1 ? this.inProgress.length - this.index  : this.inProgress.length - this.index * 2);
          this.done = data.filter(d => d.status == 'DONE' && d.username == this.username).slice(this.limit === 1 ? (this.done.length <= 1 ? 0 : -1 - this.index ) : (this.done.length <= 2 ? 0 : -2 - this.index * 2), this.limit === 1 ? this.done.length - this.index  : this.done.length - this.index * 2);
        });
  }

  ngOnDestroy(){
    if(this.dialogRef){
      this.dialogRef.unsubscribe();
    }
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  editTask(event: CdkDragDrop<ITask[]>, task: ITask) {
    console.log("came from here : "+ event.previousContainer.id);
    console.log("came to here : "+ event.container.id);
    if (event.previousContainer !== event.container) {
      this._snackBar.open(`Task #${task.id} Updated`, 'Dismiss', {duration:1000});

      this.sub = this._taskService.update(task.id,'{"status":"'+ event.container.id+'"}')
          .subscribe(() =>  { this.getAllTasks()});
    }

  }

  refreshTasks(){
    this.getAllTasks();
  }

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
    );
    this.showEmpty = true;
  }

  openDialog(): void {
    if(this.dialogRef){
      this.dialogRef.unsubscribe();
    }
    this.dialogRef = this.dialog.open(AddTaskDialog, {
      data: {username: this.username},
      disableClose:true
      }).afterClosed().subscribe(()=>{
        this.getAllTasks();
      })
  }
  protected readonly window = window;
}

@Component({
  selector: 'add-task-dialog',
  templateUrl: 'add-task-dialog.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class AddTaskDialog {

  //form definition & input validation
  task = new FormGroup({
    title: new FormControl(null,Validators.minLength(5)),
    description: new FormControl(null,Validators.minLength(10)),
    longDescription: new FormControl(null,Validators.minLength(20)),
    status: new FormControl('TO DO',Validators.required),
    priority: new FormControl(null,Validators.required),
    //fetching username to create correct task data
    username: new FormControl(this.data.username),
  });

    constructor(
      public dialogRef: MatDialogRef<AddTaskDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private _taskService: TaskService,
      private _snackBar: MatSnackBar)
  {}


  getLatest: SubscriptionLike;
  createTask: SubscriptionLike;
  latestId: number;

  ngOnInit() {
    //get this user's latest task (+1 = current task number)
    console.log(this.data.username);
    this.getLatest = this._taskService.findLatest(`{"username":"${this.data.username}"}`)
        .subscribe(d => this.latestId = d.length == 0 ? '1' : d.reduce((p,c) => p.id > c.id ? p : c).id +1);
  }


  ngOnDestroy(){
    if(this.getLatest){
      this.getLatest.unsubscribe();
    }
  }

  isValid(){
    return this.task.valid;
  }

  onSubmit(){
    this.createTask = this._taskService.create(this.task.value)
        .subscribe((result)=> {
          this._snackBar.open(`Task #${result.id} Created`, 'Dismiss', {duration:1000});
          console.log("THIS TASK HAS BEEN CREATED: ",result);
        });

  }

  onNoClick(): void {
    //console.log(this.task);
    let dec = window.confirm("Are you sure you want to leave? Any changes will not be saved!");
    if(dec) {
      this.dialogRef.close();
    }
  }
  protected readonly window = window;
}

