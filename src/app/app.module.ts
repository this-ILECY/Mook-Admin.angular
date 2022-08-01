import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskBarComponent } from './Component-desk-bar/desk-bar.component';
import { StudentComponent } from './Student/Component-student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { ComponentNewRegisterComponent } from './Student/Component-new-register/new-register.component';
import { ComponentBookRequestComponent } from './Student/component-book-request/book-request.component';
import { StudentDetailsComponent } from './Student/Component-student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskBarComponent,
    StudentComponent,
    ComponentNewRegisterComponent,
    ComponentBookRequestComponent,
    StudentDetailsComponent,
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
