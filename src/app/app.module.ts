import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskBarComponent } from './Component-desk-bar/desk-bar.component';
import { StudentComponent } from './Student/Component-student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { ComponentNewRegisterComponent } from './Student/Component-new-register/component-new-register.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskBarComponent,
    StudentComponent,
    ComponentNewRegisterComponent,
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
