import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public taskTitle: string;
  
  @Input() task: Task;
  @Output() addTaskEvent = new EventEmitter<Task>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public addTask() {
    let task = {
      title: this.taskTitle,
      completed: false,
    };
    if (this.taskTitle.trim()?.length !== 0) {
      this.todoService.addTask(task).subscribe(
        task => {
          this.addTaskEvent.emit(task);
          this.taskTitle = '';
        })
    }
  }

}
