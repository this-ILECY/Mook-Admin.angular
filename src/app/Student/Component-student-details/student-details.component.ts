import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(this.data);
      
  }

  ngOnInit(): void {
  }

}
