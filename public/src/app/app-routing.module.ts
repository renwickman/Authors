import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', pathMatch: "full", redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
