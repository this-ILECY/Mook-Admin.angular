import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IComment } from 'src/app/App-Services/Models/IComment';

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
  ngOnInit(): void {
    this.comments = this.dataservice.getComment();

    if (this.data !== undefined) {
      this.comments = this.comments.filter(c => c.student.studentID === this.data.selectedStudent.studentID);
    }
  }



}

