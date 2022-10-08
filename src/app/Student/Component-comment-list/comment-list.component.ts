import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/1.Essential-components/message-box/message-box.component';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { DataService } from 'src/app/App-Services/data-service';
import { IComment } from 'src/app/App-Services/Models/IComment';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { StudentDetailsComponent } from '../Component-student-details/student-details.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})

export class commentListComponent implements OnInit {

  constructor(private dataservice: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog) { }

  public comments: IComment[];
  async ngOnInit() {
    this.comments = await this.dataservice.getComment();

    if (this.data !== undefined) {
      this.comments = this.comments.filter(c => c.student.studentID === this.data.selectedStudent.studentID);
    }
  }
  openMessge(IsAdminAccepted: Boolean) {
    if (IsAdminAccepted) {
      this.dialog.open(MessageBoxComponent, { data: { 'message': 'این کامنت قبلا حذف شده' } })
    } else {
      let result = this.dialog.open(YesNoMsgboxComponent);
    }
  }

  openStudent(selectedStudent: IStudent) {
    this.dialog.open(StudentDetailsComponent, { data: { 'selectedStudent': selectedStudent } })
  }

}

