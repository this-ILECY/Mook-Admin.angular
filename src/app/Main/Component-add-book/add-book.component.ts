import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/1.Essential-components/message-box/message-box.component';
import { DataService } from 'src/app/App-Services/data-service';
import { date } from 'src/app/App-Services/date.service';
import { IBook } from 'src/app/App-Services/Models/IBook';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {
  }


  @ViewChild('bookName', { static: true }) bookName: ElementRef;
  @ViewChild('bookDesc', { static: true }) bookDesc: ElementRef;
  @ViewChild('bookPub', { static: true }) bookPub: ElementRef;
  @ViewChild('bookPageCount', { static: true }) bookPageCount: ElementRef;
  @ViewChild('bookAuthor', { static: true }) bookAuthor: ElementRef;

  ngOnInit(): void {
  }

  async saveBook() {
    let validate = this.validation();


    if (validate) {
      console.log("hi");

      let book: IBook = {
        bookID: 0,
        bookName: this.bookName.nativeElement.value,
        bookDescription: this.bookDesc.nativeElement.value,
        publisher: this.bookPub.nativeElement.value,
        bookPagesCount: this.bookPageCount.nativeElement.value,
        author: this.bookAuthor.nativeElement.value,
        createdDate: date.now(),
        updateDate: date.now(),
        bookratingCount: 0,
        bookRating: 0,
        isDeleted: false,
        isDamaged: false,
        isAvailable: true,
        adminID: this.dataService.getAdmin()[0].adminID
      }

      let result = await this.dataService.createBook(book);
      if (result) {
        this.dialog.open(MessageBoxComponent, { data: { message: this.dataService.message.infoUpdatedSuccessfully } })
        .afterClosed().subscribe(()=>{
          this.dialog.closeAll();
        });
      }
    }

  }

  validation() {
    /*checking the length and IsNaN(somehow) */
    let nameBool = this.bookName.nativeElement.value.length >= 3 && !/^\d+$/.test(this.bookName.nativeElement.value)
    let descBool = this.bookDesc.nativeElement.value.length >= 3 && !/^\d+$/.test(this.bookDesc.nativeElement.value)
    let pubBool = this.bookPub.nativeElement.value.length >= 3 && !/^\d+$/.test(this.bookPub.nativeElement.value)
    let CountBool = this.bookPageCount.nativeElement.value.length >= 1
    let AuthorBool = this.bookAuthor.nativeElement.value.length >= 3 && !/^\d+$/.test(this.bookAuthor.nativeElement.value)

    if (!nameBool) this.bookName.nativeElement.classList.add("input-invalid"); else this.bookName.nativeElement.classList.remove("input-invalid");
    if (!descBool) this.bookDesc.nativeElement.classList.add("input-invalid"); else this.bookDesc.nativeElement.classList.remove("input-invalid");
    if (!pubBool) this.bookPub.nativeElement.classList.add("input-invalid"); else this.bookPub.nativeElement.classList.remove("input-invalid");
    if (!CountBool) this.bookPageCount.nativeElement.classList.add("input-invalid"); else this.bookPageCount.nativeElement.classList.remove("input-invalid");
    if (!AuthorBool) this.bookAuthor.nativeElement.classList.add("input-invalid"); else this.bookAuthor.nativeElement.classList.remove("input-invalid");


    if (nameBool && descBool && pubBool && CountBool && AuthorBool) {
      return true
    } else {
      return false
    }
  }



}
