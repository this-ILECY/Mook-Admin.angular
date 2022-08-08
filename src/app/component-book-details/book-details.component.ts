import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../App-Services/data-service';
import { IPublisher } from '../App-Services/Models/IPublisher';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookDetailsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {
      console.log(data);
      
  }

  @ViewChild('done', { static: true }) done!: ElementRef
  @ViewChild('edit', { static: true }) edit!: ElementRef

  publisher: IPublisher[] = this.dataService.getPublisher();

  ngOnInit(): void {
  }

  enableEdit() {
    this.done.nativeElement.classList.remove('d-none');
    this.edit.nativeElement.classList.add('d-none');

  }

}
