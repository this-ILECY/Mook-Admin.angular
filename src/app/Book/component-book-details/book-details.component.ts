import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  publisher: IPublisher[] = this.dataService.getPublisher();

  ngOnInit(): void {    
  }
  
  
    enableEdit() {
      let editForm =[
        this.bookName.nativeElement,
        this.bookDesc.nativeElement,
        this.bookPub.nativeElement,
        this.bookPageCount.nativeElement,
        this.bookAuthor.nativeElement
      ]
      this.done.nativeElement.classList.remove('d-noneeeee');
      this.edit.nativeElement.classList.add('d-noneeee');

      editForm.forEach(element => {
        this.renderer.removeAttribute(element, "disabled");
      });
  }

}
