import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:index', component: AddTaskComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
