import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './Student/Component-student/student.component';

const routes: Routes = [
  { path: 'student', component:StudentComponent},
  { path: '**', redirectTo: 'student' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
