import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataservice: DataService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

}
