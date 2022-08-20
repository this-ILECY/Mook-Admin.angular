import { Component, ElementRef, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../App-Services/data-service';
import { IAdmin } from '../../App-Services/Models/IAdmin';
import { IStudent } from '../../App-Services/Models/IStudent';
import { MatDialog } from '@angular/material/dialog';
import { NewRegisterComponent } from '../Component-new-register/new-register.component';
import { BookRequestComponent } from '../../Book/Component-book-request-details/book-request.component';
import { IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { UserListComponent } from '../Component-user-list/user-list.component';
import { StudentReportComponent } from '../Component-student-report/student-report.component';
import { map } from 'rxjs/operators'
import { BookRequestListComponent } from 'src/app/Book/Component-book-request-list/book-request-list.component';
import { UserSpamReportComponent } from '../Component-user-spam-report/user-spam-report.component';
import { IComment } from 'src/app/App-Services/Models/IComment';
import { StudentDetailsComponent } from '../Component-student-details/student-details.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private dataservice: DataService,
    private dialog: MatDialog) { }

  public admin: IAdmin[] = this.dataservice.getAdmin();
  public student: IStudent[] = this.dataservice.getStudent();
  public request = this.dataservice.getRequest();
  public newRequest = this.request.filter(x => x.RequestH.IsAccepted == false);
  public overdueRequest = this.request.filter(x => x.RequestH.IsDelayed);
  public comment: IComment[] = this.dataservice.getComment();
  public AdminName: string = this.admin[0].AdminName;
  public language: string = 'Per';



  ngOnInit(): void {
  }
  openRegisterDetail(selectedStudent: IStudent) {

    const dialogRef = this.dialog.open(NewRegisterComponent, { data: { 'selectedStudent': selectedStudent } });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  openBookRequest(selectedRequest: IRequestViewModel) {

    const dialogRef = this.dialog.open(BookRequestComponent, { data: { 'selectedRequest': selectedRequest } });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
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
  openStudent(selectedStudent: IStudent) {
    const dialogRef = this.dialog.open(StudentDetailsComponent, { data: { 'selectedStudent': selectedStudent } });
  }
}
