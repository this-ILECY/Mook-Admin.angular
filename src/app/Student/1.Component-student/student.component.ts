import { Component, OnInit } from '@angular/core';
import { DataService } from '../../App-Services/data-service';
import { IAdmin } from '../../App-Services/Models/IAdmin';
import { IStudent } from '../../App-Services/Models/IStudent';
import { MatDialog } from '@angular/material/dialog';
import { NewRegisterComponent } from '../Component-new-register/new-register.component';
import { BookRequestComponent } from '../../Book/Component-book-request-details/book-request.component';
import { IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { UserListComponent } from '../Component-user-list/user-list.component';
import { StudentReportComponent } from '../Component-student-report/student-report.component';
import { BookRequestListComponent } from 'src/app/Book/Component-book-request-list/book-request-list.component';
import { UserSpamReportComponent } from '../Component-user-spam-report/user-spam-report.component';
import { IComment } from 'src/app/App-Services/Models/IComment';
import { StudentDetailsComponent } from '../Component-student-details/student-details.component';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { GetRequestComponent } from 'src/app/Book/Component-get-request/get-request.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private dataservice: DataService,
    private dialog: MatDialog) { }

  public admin: IAdmin[] = this.dataservice.getAdmin();
  public student: IStudent[];
  public newStudent: IStudent[];
  public request: IRequestViewModel[];
  public newRequest: IRequestViewModel[];
  public overdueRequest: IRequestViewModel[];
  public comment: IComment[];
  public AdminName: string = this.admin[0].AdminName;
  public language: string = 'Per';


  async ngOnInit() {
    this.request = await this.dataservice.getRequest();
    this.student = await this.dataservice.getStudent();
    this.newStudent = this.student.filter(x => x.isRegistered === false && x.isDeleted === false);
    this.overdueRequest = this.request.filter(x => x.isDelayed === true && x.isDeleted === false);
    this.newRequest = this.request.filter(x => x.isAccepted === false && x.isDeleted === false);
    this.comment = await this.dataservice.getComment();

    console.log(this.student);
    console.log(this.newStudent);

  }
  openRegisterDetail(selectedStudent: IStudent) {

    const dialogRef = this.dialog.open(NewRegisterComponent, { data: { 'selectedStudent': selectedStudent } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        document.querySelector(".new-register-number-" + selectedStudent.studentID).classList.add("d-none");
      }
    });
  }
  openBookRequest(selectedRequest: IRequestViewModel) {
    console.log(selectedRequest);
    const dialogRef = this.dialog.open(BookRequestComponent, { data: { 'selectedRequest': selectedRequest } });
    dialogRef.afterClosed().subscribe(result => {

      if (result.result === true) {
        console.log(result);
        document.querySelector(".new-request-number-" + result.id).classList.add("d-none");
      }
    });
  }
  OpenUserList() {
    const dialogRef = this.dialog.open(UserListComponent);
  }

  openStudentReport() {
    const dialogRef = this.dialog.open(StudentReportComponent);
  }

  openRequestList() {
    const dialogRef = this.dialog.open(BookRequestListComponent);
  }
  openSpamReport() {
    const dialogRef = this.dialog.open(UserSpamReportComponent);
  }
  openGetRequest() {
    const dialogRef = this.dialog.open(GetRequestComponent);
  }
  openStudent(selectedStudent: IStudent) {
    const dialogRef = this.dialog.open(StudentDetailsComponent, { data: { 'selectedStudent': selectedStudent } });
  }

  async acceptComment(id: number) {
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);

    await dialogRef.afterClosed().subscribe(async result => {
      await this.dataservice.acceptComment(id);
      document.querySelector(".comment-number-" + id).classList.add("d-none");
    });

  }
  async deleteComment(id: number) {
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);

    dialogRef.afterClosed().subscribe(async (result) => {

      this.dataservice.acceptComment(id);
      document.querySelector(".comment-number-" + id).classList.add("d-none");
    });

  }
}
