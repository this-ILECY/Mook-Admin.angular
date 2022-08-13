import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskBarComponent } from './Component-desk-bar/desk-bar.component';
import { StudentComponent } from './Student/1.Component-student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { NewRegisterComponent } from './Student/Component-new-register/new-register.component';
import { BookRequestComponent } from './Student/Component-book-request/book-request.component';
import { StudentDetailsComponent } from './Student/Component-student-details/student-details.component';
import { BookDetailsComponent } from './Book/component-book-details/book-details.component';
import { UserListComponent } from './Student/Component-user-list/user-list.component';
import { YesNoMsgboxComponent } from './1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { StudentReportComponent } from './Student/Component-student-report/student-report.component';

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
