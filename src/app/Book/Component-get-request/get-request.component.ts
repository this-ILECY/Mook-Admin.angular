import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/1.Essential-components/message-box/message-box.component';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { DataService } from 'src/app/App-Services/data-service';
import { date } from 'src/app/App-Services/date.service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IRequestDetailViewModel, IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { BookDetailsComponent } from 'src/app/Book/Component-book-details/book-details.component';
import { BookRequestComponent } from 'src/app/Book/Component-book-request-details/book-request.component';
import { StudentSelectComponent } from 'src/app/Main/Compenent-student-select/student-select.component';
import { BookSelectComponent } from 'src/app/Main/Component-book-select/book-select.component';
import { RequestSelectComponent } from 'src/app/Main/Component-request-select/request-select.component';
import { BookRequestListComponent } from '../Component-book-request-list/book-request-list.component';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.scss']
})
export class GetRequestComponent {

  constructor(public dialogRef: MatDialogRef<BookRequestComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {
  }

  @ViewChild("table", { static: true }) table: ElementRef;
  @ViewChild("invalid", { static: true }) invalid: ElementRef;

  public DateNow = date.now();
  public student: IStudent = undefined;
  public book: IBook[] = undefined;

  openBookDetail(selectedBook: IBook) {
    const dialogRef = this.dialog.open(BookDetailsComponent, { data: { 'selectedBook': selectedBook } });
  }
  openChooseRequest() {
    const dialogRef = this.dialog.open(RequestSelectComponent).afterClosed().subscribe(result => {
      if (result !== undefined) {

        this.invalid.nativeElement.classList.remove("text-invalid")
        this.table.nativeElement.classList.remove("invalid-table");
        this.invalid.nativeElement.innerHTML = "تعویض سفارش"


        this.book = new Array
        result.selectedRequest.requestDetails.forEach(element => {
          this.book.push(element.books)
        });

        this.student = result.selectedRequest.students
      } else {
        this.invalid.nativeElement.innerHTML = "انتخاب سفارش"
      }

    });
  }
  async SaveOrder() {
    let validate = this.validation();

    if (validate) {

      const dialogRef = this.dialog.open(YesNoMsgboxComponent);
      dialogRef.afterClosed().subscribe(async res => {
        if (res) {

          if (true) {
            this.dialog.open(MessageBoxComponent, { data: { message: this.dataService.message.infoUpdatedSuccessfully } })
              .afterClosed().subscribe(result => {
                this.student = undefined;
                this.book = undefined;
              })
          }
        }
      });
    }
  }
  validation() {

    let saveBool: boolean = this.book !== undefined && this.student !== undefined

    if (this.book === undefined) this.table.nativeElement.classList.add("invalid-table"); else this.table.nativeElement.classList.remove("invalid-table");
    if (this.student === undefined) this.invalid.nativeElement.classList.add("text-invalid"); else this.invalid.nativeElement.classList.remove("text-invalid");

    return saveBool;
  }
}
