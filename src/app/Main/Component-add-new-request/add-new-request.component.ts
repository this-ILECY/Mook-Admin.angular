import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/1.Essential-components/message-box/message-box.component';
import { DataService } from 'src/app/App-Services/data-service';
import { date } from 'src/app/App-Services/date.service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IRequestDetailViewModel, IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { BookDetailsComponent } from 'src/app/Book/Component-book-details/book-details.component';
import { BookRequestComponent } from 'src/app/Book/Component-book-request-details/book-request.component';
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

  @ViewChild("table", { static: true }) table: ElementRef;
  @ViewChild("invalid", { static: true }) invalid: ElementRef;

  public DateNow = date.now();
  public student: IStudent = undefined;
  public book: IBook[] = undefined;

  openBookDetail(selectedBook: IBook) {
    const dialogRef = this.dialog.open(BookDetailsComponent, { data: { 'selectedBook': selectedBook } });
  }
  openChooseStudent() {
    const dialogRef = this.dialog.open(StudentSelectComponent).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.invalid.nativeElement.classList.remove("text-invalid")
        this.invalid.nativeElement.innerHTML = "تعویض سفارش دهنده"
        this.student = result
      } else {
        this.invalid.nativeElement.innerHTML = "انتخاب سفارش دهنده"
      }

    });
  }
  async SaveOrder() {
    let validate = this.validation();

    if (validate) {

      let reqDList: IRequestDetailViewModel[] = new Array
      this.book.forEach(element => {
        let reqD: IRequestDetailViewModel = {
          bookID: element.bookID,
          isDamaged: false,
          isLost: false,
          requestDetailDescription: "",
          requestDetailID: 0,
          requestHeaderID: 0,
          books: element
        }
        reqDList.push(reqD);
      });


      let request: IRequestViewModel = {
        requestID: 0,
        studentID: this.student.studentID,
        requestAcceptedDate: null,
        isAccepted: false,
        requestFinishedDate: null,
        isDelayed: false,
        delayDays: 0,
        requestDecription: "",
        createdDate: date.now(),
        isDeleted: false,
        requestDetails: reqDList,
        students: this.student
      };

      let result = await this.dataService.createRequest(request);

      if (result) {
        this.dialog.open(MessageBoxComponent, { data: { message: this.dataService.message.infoUpdatedSuccessfully } })
          .afterClosed().subscribe(result => {
            this.student = undefined;
            this.book = undefined;
          })
      }
    }
  }
  validation() {

    let saveBool: boolean = this.book !== undefined && this.student !== undefined

    if (this.book === undefined) this.table.nativeElement.classList.add("invalid-table"); else this.table.nativeElement.classList.remove("invalid-table");
    if (this.student === undefined) this.invalid.nativeElement.classList.add("text-invalid"); else this.invalid.nativeElement.classList.remove("text-invalid");

    return saveBool;
  }
  openChooseBook() {
    const dialogRef = this.dialog.open(BookSelectComponent).afterClosed().subscribe(result => {

      if (result !== undefined) {

        this.table.nativeElement.classList.remove("invalid-table")

        if (this.book == null) {
          this.book = new Array;
          this.book.push(result);
        } else {
          let duplicate = this.book.findIndex(x => x.bookID === result.bookID);

          if (duplicate == -1) {
            this.book.push(result);
          }
        }
      }

    });
  }

}
