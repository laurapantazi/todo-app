import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

tasks = [];
description = "";
todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.todoForm = new FormGroup({
  		'description': new FormControl(this.description, [Validators.required, Validators.minLength(3)])
  	});
  }

    books: any [];


  onSubmit(){
  	if (!this.todoForm.invalid)
  	{
  		this.tasks.push({ description: this.description, complete: false});
  	}
  	this.description = "";
  }
}
