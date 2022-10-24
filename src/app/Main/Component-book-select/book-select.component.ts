import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { BookDetailsComponent } from 'src/app/Book/Component-book-details/book-details.component';
import { BookListComponent } from 'src/app/Book/Component-book-list/book-list.component';

@Component({
  selector: 'app-book-select',
  templateUrl: './book-select.component.html',
  styleUrls: ['./book-select.component.scss']
})
export class BookSelectComponent implements OnInit {
  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<BookListComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  Books!: IBook[]

  async ngOnInit() {
    this.Books = await this.dataService.getBook();

    if (this.data !== null) {

      if (this.data.isAvailable) {
        console.log(this.Books);
        this.Books = this.Books.filter(x => x.isAvailable == true)
      }
    }
  }

  selectBook(selectedBook: IBook) {
    this.dialogRef.close(selectedBook);
  }

}
