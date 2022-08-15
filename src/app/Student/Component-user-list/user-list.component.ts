import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { StudentDetailsComponent } from '../Component-student-details/student-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<StudentDetailsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  Students!: IStudent[]
  ngOnInit(): void {
    this.Students = this.dataService.getStudent();
  }
  openStudentDetail(selectedStudent:IStudent){
    const dialogRef = this.dialog.open(StudentDetailsComponent, { data: { 'selectedStudent': selectedStudent } });
  }

}
