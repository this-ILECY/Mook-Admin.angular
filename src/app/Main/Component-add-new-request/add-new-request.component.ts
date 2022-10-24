import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { DataService } from 'src/app/App-Services/data-service';
import { date } from 'src/app/App-Services/date.service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { BookDetailsComponent } from 'src/app/Book/Component-book-details/book-details.component';
import { BookRequestComponent } from 'src/app/Book/Component-book-request-details/book-request.component';
import { StudentDetailsComponent } from 'src/app/Student/Component-student-details/student-details.component';
import { StudentSelectComponent } from '../Compenent-student-select/student-select.component';
import { BookSelectComponent } from '../Component-book-select/book-select.component';

@Component({
  selector: 'app-add-new-request',
  templateUrl: './add-new-request.component.html',
  styleUrls: ['./add-new-request.component.scss']
})
export class AddNewRequestComponent {
  constructor(public dialogRef: MatDialogRef<BookRequestComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {
  }

  public DateNow = date.now();
  public student: IStudent = null;
  public book: IBook[] = null;

  openBookDetail(selectedBook: IBook) {
    const dialogRef = this.dialog.open(BookDetailsComponent, { data: { 'selectedBook': selectedBook } });
  }
  openChooseStudent() {
    const dialogRef = this.dialog.open(StudentSelectComponent).afterClosed().subscribe(result => {
      this.student = result

    });
  }
  SaveOrder(id: number) {

  }
  openChooseBook() {
    const dialogRef = this.dialog.open(BookSelectComponent).afterClosed().subscribe(result => {

      if (this.book == null) {
        this.book = new Array;
        this.book.push(result);
      } else {
        let duplicate = this.book.findIndex(x => x.bookID === result.bookID);

        if (duplicate == -1) {
          this.book.push(result);
        }
      }

    });
  }

}
