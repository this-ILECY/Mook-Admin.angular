import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { StudentDetailsComponent } from 'src/app/Student/Component-student-details/student-details.component';

@Component({
  selector: 'app-student-select',
  templateUrl: './student-select.component.html',
  styleUrls: ['./student-select.component.scss']
})
export class StudentSelectComponent implements OnInit {
  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<StudentDetailsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  Students!: IStudent[]
  async ngOnInit() {

    this.Students = await this.dataService.getStudent();
    console.log(this.Students);
  }
  selectStudent(selectedStudent: IStudent) {
    this.dialogRef.close(selectedStudent);
  }

}
