import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { BookRequestComponent } from '../Component-book-request-details/book-request.component';


@Component({
  selector: 'app-book-request-list',
  templateUrl: './book-request-list.component.html',
  styleUrls: ['./book-request-list.component.scss']
})
export class BookRequestListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookRequestListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dataservice: DataService) {
  }

  public bookList = this.dataservice.getRequest();

  ngOnInit(): void {    
    if (this.data !== undefined) {
      this.bookList = this.bookList.filter(x=> x.student.studentID == this.data.selectedStudent.studentID);
    }
  }
  openRequestDetail(selectedRequest: IRequestViewModel) {
    const dialogRef = this.dialog.open(BookRequestComponent, { data: { 'selectedRequest': selectedRequest } });
  }

}
