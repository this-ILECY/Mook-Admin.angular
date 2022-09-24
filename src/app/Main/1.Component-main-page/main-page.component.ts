import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookListComponent } from 'src/app/Book/Component-book-list/book-list.component';
import { BookToBuyComponent } from 'src/app/Book/Component-book-to-buy/book-to-buy.component';
import { AddBookComponent } from '../Component-add-book/add-book.component';
import { AddNewRequestComponent } from '../Component-add-new-request/add-new-request.component';
import { NewUserComponent } from '../Component-new-user/new-user.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void { }

  openAddBook() {
    this.dialog.open(AddBookComponent);
  }
  openRegister() {
    this.dialog.open(NewUserComponent, { data: { 'IsNew': true } });
  }
  newRequest() {
    this.dialog.open(AddNewRequestComponent)
  }
}
