import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskBarComponent } from './Component-desk-bar/desk-bar.component';
import { StudentComponent } from './Student/Component-student/student.component';

const routes: Routes = [
  { path: 'student', component:StudentComponent},
  { path: 'bar', component:DeskBarComponent},
  { path: '**', redirectTo: 'student' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
