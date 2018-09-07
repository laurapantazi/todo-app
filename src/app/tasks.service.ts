import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

	uri = "http://localhost:4000";
	data = [];

  constructor(private http: HttpClient) { }

  postTask(description, complete){
  	const task = {
  		description: description,
  		complete: complete
  	}
  	this.http.post(`${this.uri}/tasks/add`,task).subscribe(x=> console.log(x));
  }

  getTasks(){
  	return this.http.get(`${this.uri}/tasks`).map(x=> {
  		return x;
  	});
  }

  getTask(id){
  	return this.http.get(`${this.uri}/tasks/`+id).map(x => {return x;});
  }

  public editTask(id, description, complete){
  	const task = {
  		description: description,
  		complete: complete
  	}
  	return this.http.put(`${this.uri}/tasks/`+id, task).map(x => console.log(x));
  }

  public deleteTask(id){
  	return this.http.delete(`${this.uri}/tasks/`+id).map(x => {return x;});
  }


  private handleError(error: Response){
  	console.error('API servise error', error);
  	return Observable.throw(error);
  }
}