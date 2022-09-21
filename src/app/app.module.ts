import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskBarComponent } from './Component-desk-bar/desk-bar.component';
import { StudentComponent } from './Student/1.Component-student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { NewRegisterComponent } from './Student/Component-new-register/new-register.component';
import { BookRequestComponent } from './Book/Component-book-request-details/book-request.component';
import { StudentDetailsComponent } from './Student/Component-student-details/student-details.component';
import { BookDetailsComponent } from './Book/Component-book-details/book-details.component';
import { UserListComponent } from './Student/Component-user-list/user-list.component';
import { YesNoMsgboxComponent } from './1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { StudentReportComponent } from './Student/Component-student-report/student-report.component';
import { BookRequestListComponent } from './Book/Component-book-request-list/book-request-list.component';
import { UserSpamReportComponent } from './Student/Component-user-spam-report/user-spam-report.component';
import { BookComponent } from './Book/1.Component-book/book.component';
import { MainPageComponent } from './Main/1.Component-main-page/main-page.component';
import { HistoryComponent } from './history/history.component';
import { SearchTextBoxComponent } from './Search/Component-search-text-box/search-text-box.component';
import { SearchModalComponent } from './Search/Component-search-modal/search-modal.component';
import { BookListComponent } from './Book/Component-book-list/book-list.component';
import { commentListComponent } from './Student/Component-comment-list/comment-list.component';
import { MessageBoxComponent } from './1.Essential-components/message-box/message-box.component';
import { BookToBuyComponent } from './Book/Component-book-to-buy/book-to-buy.component';
import { LoginComponent } from './Component-login/login.component';
import { ExitMsgboxComponent } from './1.Essential-components/Component-exit-msgbox/exit-msgbox.component';
import { NewUserComponent } from './Main/Component-new-user/new-user.component';
import { AddBookComponent } from './Main/Component-add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskBarComponent,
    StudentComponent,
    NewRegisterComponent,
    BookRequestComponent,
    StudentDetailsComponent,
    BookDetailsComponent,
    UserListComponent,
    YesNoMsgboxComponent,
    StudentReportComponent,
    BookRequestListComponent,
    UserSpamReportComponent,
    BookComponent,
    MainPageComponent,
    HistoryComponent,
    SearchTextBoxComponent,
    SearchModalComponent,
    BookListComponent,
    commentListComponent,
    MessageBoxComponent,
    BookToBuyComponent,
    LoginComponent,
    ExitMsgboxComponent,
    NewUserComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
