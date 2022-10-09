import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookListComponent } from '../Component-book-list/book-list.component';
import { BookToBuyComponent } from '../Component-book-to-buy/book-to-buy.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log();
    
  }
  openBookList() {
    this.dialog.open(BookListComponent);
  }
  openBookListAvailable() {
    this.dialog.open(BookListComponent, { data: { 'IsAvailable': true } });
  }
  openBookToBuy(){
    this.dialog.open(BookToBuyComponent)
  }
}
