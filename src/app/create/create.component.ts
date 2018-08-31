import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
  		this.tasks.push({ description: this.description, complete: false});
  		this.ts.postTask(this.description, this.complete);
  	}
  	this.description = "";
  }
}
