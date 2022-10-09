import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { BookDetailsComponent } from '../Component-book-details/book-details.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<BookListComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  Books!: IBook[]

  ngOnInit(): void {
    this.Books = this.dataService.getBook();

    if (this.data !== null) {

      if (this.data.IsAvailable) {
        this.Books = this.Books.filter(x => x.IsAvailable == true)
      }
    }
  }

  openBookDetail(selectedBook: IBook) {
    const dialogRef = this.dialog.open(BookDetailsComponent, { data: { 'selectedBook': selectedBook } });
  }
}