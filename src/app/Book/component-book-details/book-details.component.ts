import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/1.Essential-components/message-box/message-box.component';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { DataService } from '../../App-Services/data-service';
import { IPublisher } from '../../App-Services/Models/IPublisher';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookDetailsComponent>,
    private renderer: Renderer2,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {
  }

  @ViewChild('done', { static: true }) done!: ElementRef
  @ViewChild('edit', { static: true }) edit!: ElementRef
  @ViewChild('bookName', { static: true }) bookName!: ElementRef
  @ViewChild('bookDesc', { static: true }) bookDesc!: ElementRef
  @ViewChild('bookPub', { static: true }) bookPub!: ElementRef
  @ViewChild('bookPageCount', { static: true }) bookPageCount!: ElementRef
  @ViewChild('bookAuthor', { static: true }) bookAuthor!: ElementRef


  public editForm;

  ngOnInit(): void {

    this.editForm = [
      this.bookName.nativeElement,
      this.bookDesc.nativeElement,
      this.bookPub.nativeElement,
      this.bookPageCount.nativeElement,
      this.bookAuthor.nativeElement
    ]
  }

  async updateData(selectedBook: IBook) {
    selectedBook.bookName = this.bookName.nativeElement.value
    selectedBook.bookDescription = this.bookDesc.nativeElement.value
    selectedBook.publisher = this.bookPub.nativeElement.value
    selectedBook.bookPagesCount = this.bookPageCount.nativeElement.value
    selectedBook.author = this.bookAuthor.nativeElement.value
    let res = await this.dataService.updateBook(selectedBook);
    console.log(res);
    
    if (res) {
      this.disableEdit()
      this.dialog.open(MessageBoxComponent, { data: { message: this.dataService.message.infoUpdatedSuccessfully } })
    }
  }


  public enableEdit() {
    this.done.nativeElement.classList.remove('d-none');
    this.edit.nativeElement.classList.add('d-none');

    this.editForm.forEach(element => {
      this.renderer.removeAttribute(element, "disabled");
    });
    this.editApearance()
  }
  disableEdit() {
    this.showApearance()
    this.done.nativeElement.classList.add('d-none');
    this.edit.nativeElement.classList.remove('d-none');

    this.editForm.forEach(element => {
      this.renderer.setAttribute(element, "disabled", "disabled");
    });
  }

  editApearance() {
    this.editForm.forEach(element => {
      element.classList.add('input-isnew');
    });
  }
  showApearance() {
    this.editForm.forEach(element => {
      element.classList.remove('input-isnew');
    });
  }

}
