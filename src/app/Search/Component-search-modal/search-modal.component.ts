import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IBook } from 'src/app/App-Services/Models/IBook';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { BookDetailsComponent } from 'src/app/Book/Component-book-details/book-details.component';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  constructor(private dataservice: DataService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @ViewChild('span', { static: true }) span: ElementRef;
  @ViewChild('studentAction', { static: true }) studentAction: ElementRef;

  public student: IStudent[] = this.dataservice.getStudent();
  public book: IBook[] = this.dataservice.getBook();
  public filteredBook;
  public filteredStudent;

  test = false
  search(value: string) {

    if (value.length > 0) {
      this.span.nativeElement.classList.remove('d-none');
    } else {
      this.span.nativeElement.classList.add('d-none');
    }

    this.filteredBook = this.book.filter(x => x.PubName.toLowerCase().includes(value) || x.bookName.toLowerCase().includes(value) || x.bookDescription.toLowerCase().includes(value) || x.Author.toLowerCase().includes(value));
    this.filteredStudent = this.student.filter(x => x.studentName.toLowerCase().includes(value) || x.studentSSID.toLowerCase().includes(value) || x.studentUniversityID.toLowerCase().includes(value));
  }

  openAction(e: HTMLDivElement) {

    let isCollapsed = e.classList.contains("collapsed");
    let action = document.querySelectorAll(".action");

    for (let index = 0; index < action.length; index++) {
      action[index].classList.remove("uncollapsed");
      action[index].classList.add("collapsed");
    }

    if (isCollapsed) {
      e.classList.add("uncollapsed");
      e.classList.remove("collapsed");
    } else if (!isCollapsed) {
      e.classList.remove("uncollapsed");
      e.classList.add("collapsed");
    }
  }

  openBookDetails(selectedBook) {
    this.dialog.open(BookDetailsComponent, { data: { "selectedBook": selectedBook } });
  }

}
