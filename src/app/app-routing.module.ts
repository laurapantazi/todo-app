import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes =[
{
  path: 'create',
  component: CreateComponent
},
{
  path: 'tasks',
  component: TaskListComponent
},

{
  path: 'tasks/:id',
  component: TaskDetailComponent
},
{
	path: '',
	redirectTo: '/create',
	pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
