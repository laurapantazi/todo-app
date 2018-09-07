import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { PageNotFoundComponent } from './not-found.component';

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
