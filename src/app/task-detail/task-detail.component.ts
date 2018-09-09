import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

	task: object;
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private taskService: TasksService
  	) { }

  ngOnInit() {
  	this.getTask();
  }

  getTask(){
  	const id = this.route.snapshot.paramMap.get("id");
  	this.taskService.getTask(id).subscribe(task => {
  		this.task = task;
  		console.log("task"+task);
  	});
  
  }

  goBack(){
  	this.location.back();
  }
}
