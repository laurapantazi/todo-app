import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { TasksService } from './tasks.service';
import { ShowComponent } from './show/show.component';

const appRoutes: Routes =[
{
  path: 'create',
  component: CreateComponent
},
{
  path: 'show',
  component: ShowComponent
},
{
  path: 'edit/:id',
  component: EditComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    CreateComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ TasksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
