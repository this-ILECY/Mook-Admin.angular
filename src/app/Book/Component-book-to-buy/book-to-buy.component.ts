import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IbookToBuy } from 'src/app/App-Services/Models/IBook';

@Component({
  selector: 'app-book-to-buy',
  templateUrl: './book-to-buy.component.html',
  styleUrls: ['./book-to-buy.component.scss']
})
export class BookToBuyComponent implements OnInit {

  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<BookToBuyComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public BooksToBuy: IbookToBuy[];

  ngOnInit(): void {
    this.BooksToBuy = this.dataService.getBookToBuy();

  }

}
