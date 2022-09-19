import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressService } from './App-Services/address.service';
import { BookComponent } from './Book/1.Component-book/book.component';
import { DeskBarComponent } from './Component-desk-bar/desk-bar.component';
import { LoginComponent } from './Component-login/login.component';
import { HistoryComponent } from './history/history.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StudentComponent } from './Student/1.Component-student/student.component';

let addressService = new AddressService();

const routeName = addressService.router;
const routes: Routes = [
  { path: routeName.student, component: StudentComponent },
  { path: routeName.book, component: BookComponent },
  { path: routeName.main, component: MainPageComponent },
  { path: routeName.history, component: HistoryComponent },
  { path: routeName.login, component: LoginComponent },
  { path: '**', redirectTo: 'student' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
