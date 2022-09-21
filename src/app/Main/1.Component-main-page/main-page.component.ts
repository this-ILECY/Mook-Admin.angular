import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookListComponent } from 'src/app/Book/Component-book-list/book-list.component';
import { BookToBuyComponent } from 'src/app/Book/Component-book-to-buy/book-to-buy.component';
import { NewUserComponent } from '../Component-new-user/new-user.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void { }

  openBookList() {
    this.dialog.open(BookListComponent);
  }
  openBookListAvailable() {
    this.dialog.open(NewUserComponent, { data: { 'IsNew': true } });
  }
  openBookToBuy() {
    this.dialog.open(BookToBuyComponent)
  }
}
