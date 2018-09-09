import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasks: any;

  ngOnInit() {
  	this.showTasks();
  }

  showTasks(){
  	this.tasksService.getTasks().subscribe((data) =>
  	{
  		this.tasks = data;
  	});
  }

  deleteTask(id){
  	this.tasksService.deleteTask(id).subscribe((response)=>{
  		this.showTasks();
  	});
  }

    toggleTask(id, description, complete){    	
  	this.tasksService.editTask(id,description,!complete).subscribe((response)=>{
  	});
  }

  	onEnterDescription(id, description, complete){ 
  	this.tasksService.editTask(id,description,complete).subscribe((response)=>{
  	});
  }

}
