import {
    Component,
    EventEmitter, Inject,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import {ITask} from '../../../model/task.model';
import {TaskService} from '../../../services/tasks/task.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AddTaskDialog} from '../task-dashboard/task-dashboard.component';
import {SubscriptionLike} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
    @Input()
    task : ITask;

    update : SubscriptionLike;
    uTask : ITask;

    @Output()
    refreshTasks = new EventEmitter<ITask[]>();

    getTask:SubscriptionLike;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
    }

    deleteTask(){
        this.dialog.open(DeleteTaskDialog, {
          disableClose:true,
            data: { id : this.task.id }
        }).afterClosed().subscribe(()=>{
          this.refreshTasks.emit();
        });
    }

    updateTask() {
      this.dialog.open(EditTaskDialog, {
        disableClose:true,
        data: this.task,
      }).afterClosed().subscribe(()=>{
        this.refreshTasks.emit();
      });
    }

  protected readonly window = window;
}

@Component({
    selector: 'delete-task-dialog',
    templateUrl: './delete-task-dialog.html',
    styleUrls: ['./task-card.component.css']
})
export class DeleteTaskDialog {

    deleteTask: SubscriptionLike;

  @Output()
  refreshTasks = new EventEmitter<ITask[]>();

    constructor(
        public dialogRef: MatDialogRef<AddTaskDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _taskService: TaskService,
        private _snackBar: MatSnackBar)
    {}

    ngOnInit(){
      if(this.deleteTask){
        this.deleteTask.unsubscribe();
      }
    }

    ngOnDestroy(){
        if(this.deleteTask){
            this.deleteTask.unsubscribe();
        }
    }

    onConfirm(){
        this.deleteTask = this._taskService.delete(this.data.id).subscribe((result)=>{
          this._snackBar.open(`Task #${this.data.id} Deleted`, 'Dismiss', {duration:1000});
            console.log("TASK DELETED: ", result);
            this.refreshTasks.emit();
            this.onNoClick();
        });
    }

    onNoClick(){
        this.dialogRef.close();
    }
}

@Component({
  selector: 'edit-task-dialog',
  templateUrl: 'edit-task-dialog.html',
  styleUrls: ['../task-dashboard/task-dashboard.component.css']
})
export class EditTaskDialog {

  @Output()
  refreshTasks = new EventEmitter<ITask[]>();

  //form definition & input validation
  task = new FormGroup({
    title: new FormControl(null,Validators.minLength(5)),
    description: new FormControl(null,Validators.minLength(10)),
    longDescription: new FormControl(null,Validators.minLength(10)),
    status: new FormControl(null,Validators.required),
    //fetching username to create correct task data
    username: new FormControl(),
    priority: new FormControl(null,Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ITask,
    private _taskService: TaskService,
  private _snackBar: MatSnackBar)
  {}


  getLatest: SubscriptionLike;
  updateTask: SubscriptionLike;
  isUpdated: SubscriptionLike;
  latestId: number;
  disabled= false;

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  isDiff(){
    this.isUpdated = this._taskService.get(this.data.id).pipe(take(1))
      .subscribe((result)=> {
        console.log(JSON.stringify(result) === JSON.stringify(this.data));
          this.disabled = JSON.stringify(result) !== JSON.stringify(this.data);
      });
  }


  isValid(){
    return this.task.valid && this.disabled;
  }

  onSubmit(){
    if(this.isUpdated){
      this.isUpdated.unsubscribe();
    }
    this.updateTask = this._taskService.update(this.data.id,this.data)
      .subscribe((result)=> {
        this._snackBar.open(`Task #${this.data.id} Updated`, 'Dismiss', {duration:1000});
        console.log("THIS TASK HAS BEEN UPDATED: ",result);
        this.refreshTasks.emit();
      });
    this.dialogRef.close();
  }


  onNoClick(): void {
    //console.log(this.task);
    let dec= true;
    //if no changes no need to confirm
    if(this.disabled) {
      dec = window.confirm("Are you sure you want to leave? Any changes will not be saved!");
    }
    if(dec) {
      this.dialogRef.close();
    }
  }
}

