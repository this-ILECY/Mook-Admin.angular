import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../App-Services/data-service';
import { IBook } from '../../App-Services/Models/IBook';
import { IStudent } from '../../App-Services/Models/IStudent';
import { SearchModalComponent } from '../Component-search-modal/search-modal.component';

@Component({
  selector: 'app-search-text-box',
  templateUrl: './search-text-box.component.html',
  styleUrls: ['./search-text-box.component.scss']
})
export class SearchTextBoxComponent implements OnInit {

  constructor(private dataservice: DataService,
    private dialog: MatDialog) { }

  async ngOnInit() {    
    this.student = await this.dataservice.getStudent();
    this.book = await this.dataservice.getBook();
  }

  @ViewChild('mainsearch', { static: true }) mainsearch: ElementRef;

  public student: IStudent[];
  public book: IBook[];

  showsearch() {
    const dialogRef = this.dialog.open(SearchModalComponent);
  }


}

document.addEventListener('keyDown', () => {

})