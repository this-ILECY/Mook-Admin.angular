import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';


@Component({
  selector: 'app-book-request-list',
  templateUrl: './book-request-list.component.html',
  styleUrls: ['./book-request-list.component.scss']
})
export class BookRequestListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookRequestListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dataservice:DataService) {
  }

  public bookList = this.dataservice.getRequest();

  ngOnInit(): void {
  }

}
