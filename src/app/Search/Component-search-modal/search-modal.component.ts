import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/App-Services/data-service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IStudent } from 'src/app/App-Services/Models/IStudent';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  @ViewChild('span', { static: true }) span: ElementRef

  public student: IStudent[] = this.dataservice.getStudent();
  public book: IBook[] = this.dataservice.getBook();
  public filteredBook;
  public filteredStudent;

  test = false
  search(value: string) {

    if (value.length > 0) {
      // this.span.nativeElement.classList.remove('d-none');
      this.test = true
    } else {
      // this.span.nativeElement.classList.add('d-none');
      this.test = false
    }

    this.filteredBook = this.book.filter(x => x.PubName.includes(value) || x.bookName.includes(value) || x.bookDescription.includes(value));
    this.filteredStudent = this.student.filter(x => x.studentName.includes(value) || x.studentSSID.includes(value) || x.studentUniversityID.includes(value));
  }

}
