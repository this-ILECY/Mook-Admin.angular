import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { BookDetailsComponent } from 'src/app/Book/Component-book-details/book-details.component';
import { StudentDetailsComponent } from '../../Student/Component-student-details/student-details.component';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['./book-request.component.scss']
})
export class BookRequestComponent {


  constructor(public dialogRef: MatDialogRef<BookRequestComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {      
  }

  studentDetail(selectedStudent:IStudent){
    const dialogRef = this.dialog.open(StudentDetailsComponent, { data: { 'selectedStudent': selectedStudent } });
  }
  openBookDetail(selectedBook:IBook){
    const dialogRef = this.dialog.open(BookDetailsComponent, { data: { 'selectedBook': selectedBook } });
  }
}
