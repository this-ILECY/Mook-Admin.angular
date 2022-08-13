import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IStudentReport } from 'src/app/App-Services/Models/IStudent';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.scss']
})
export class StudentReportComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataservice: DataService) {
  }

  studentReport!: IStudentReport[];

  ngOnInit(): void {
    this.studentReport = this.dataservice.getStudentReport();

  }

}
