import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../App-Services/data-service';
import { IAdmin } from '../../App-Services/Models/IAdmin';
import { IStudent } from '../../App-Services/Models/IStudent';
import { MatDialog } from '@angular/material/dialog';
import { NewRegisterComponent } from '../Component-new-register/new-register.component';
import { BookRequestComponent } from '../Component-book-request/book-request.component';
import { IRequestViewModel } from 'src/app/App-Services/Models/IRequestH';
import { UserListComponent } from '../Component-user-list/user-list.component';
import { StudentReportComponent } from '../Component-student-report/student-report.component';


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

  public AdminName: string = this.admin[0].AdminName;
  public language: string = 'Per';

  ngOnInit(): void {
    console.log(this.request);

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
  OpenUserList(){
    const dialogRef = this.dialog.open(UserListComponent);
  }
  
  openStudentReport(){
    const dialogRef = this.dialog.open(StudentReportComponent);
  }

}