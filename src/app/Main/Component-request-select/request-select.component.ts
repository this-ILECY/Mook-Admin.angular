import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { BookRequestComponent } from 'src/app/Book/Component-book-request-details/book-request.component';
import { BookRequestListComponent } from 'src/app/Book/Component-book-request-list/book-request-list.component';

@Component({
  selector: 'app-request-select',
  templateUrl: './request-select.component.html',
  styleUrls: ['./request-select.component.scss']
})
export class RequestSelectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookRequestListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dataservice: DataService) {
  }

  public bookList: IRequestViewModel[];

  async ngOnInit() {
    this.bookList = await this.dataservice.getRequest();

    if (this.data != (null || undefined)) {
      console.log(this.bookList.filter(x => x.students.studentID == this.data.selectedStudent.studentID));

      this.bookList = this.bookList.filter(x => x.students.studentID == this.data.selectedStudent.studentID);
    }
  }

  openRequestDetail(selectedRequest: IRequestViewModel) {
    const dialogRef = this.dialog.open(BookRequestComponent, { data: { 'selectedRequest': selectedRequest } });
  }

  selectRequest(selectedRequest: IRequestViewModel) {
    console.log(selectedRequest);
    
    this.dialogRef.close({ selectedRequest: selectedRequest });
  }


}
