import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

tasks = [];
description = "";
complete = false;
todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private ts: TasksService) { }

  ngOnInit() {
  	this.todoForm = new FormGroup({
  		'description': new FormControl(this.description, [Validators.required, Validators.minLength(3)])
  	});
  }

  onSubmit(){
  	if (!this.todoForm.invalid)
  	{
  		this.ts.postTask(this.description, this.complete);
  	}
  	this.description = "";
  }
}
