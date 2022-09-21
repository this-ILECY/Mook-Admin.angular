import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IPublisher } from 'src/app/App-Services/Models/IPublisher';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
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



}
