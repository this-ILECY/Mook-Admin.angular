import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IStudent, IStudentReport } from 'src/app/App-Services/Models/IStudent';
import { StudentDetailsComponent } from '../Component-student-details/student-details.component';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.scss']
})
export class StudentReportComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataservice: DataService,
    private dialog: MatDialog) {
  }

  studentReport!: IStudentReport[];

  ngOnInit(): void {
    this.studentReport = this.dataservice.getStudentReport();

    if (this.data != (undefined || null)) {
      this.studentReport = this.studentReport.filter(x => x.studentID == this.data.selectedStudent.studentID);
    }

  }

  openStudentDetail(studentID: number) {


    let selectedStudent: IStudent | undefined = this.dataservice.getStudent().find(x => x.studentID == studentID);

    const dialogRef = this.dialog.open(StudentDetailsComponent, { data: { 'selectedStudent': selectedStudent } });
  }

}
