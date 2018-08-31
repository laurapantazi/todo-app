import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasks: any;

  ngOnInit() {
  	this.getTasks();
  }

  getTasks(){
  	this.tasksService.getTasks().subscribe((data) =>
  	{
  		this.tasks = data;
  	});
  }

  deleteTask(id){
  	this.tasksService.deleteTask(id).subscribe((response)=>{
  		this.getTasks();
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