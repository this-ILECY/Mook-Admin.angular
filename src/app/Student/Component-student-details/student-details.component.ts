import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { IStudent } from 'src/app/App-Services/Models/IStudent';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private renderer: Renderer2) {
    this.selectedStudent = this.data.selectedStudent;
  }

  //elements from html file
  @ViewChild('name', { static: true }) Name: ElementRef
  @ViewChild('uniID', { static: true }) UniID: ElementRef
  @ViewChild('SID', { static: true }) SID: ElementRef
  @ViewChild('done', { static: true }) done: ElementRef
  @ViewChild('edit', { static: true }) edit: ElementRef

  public editForm = []

  public selectedStudent: IStudent;

  //on intialization
  ngOnInit(): void {
   
    this.editForm = [
      this.Name.nativeElement,
      this.UniID.nativeElement,
      this.SID.nativeElement,
    ]   
  }

  suspend() {
    let result = this.yesNo()
  }
  block() {
    let result = this.yesNo()
  }

  yesNo(): boolean {
    let result!: boolean;
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
      result = res;
    });

    return result;
  }



  enableEdit() {
    this.editApearance()
      this.edit.nativeElement.classList.add('d-none');
      this.done.nativeElement.classList.remove('d-none');

    this.editForm.forEach(element => {
      this.renderer.removeAttribute(element, "disabled");
    });
  }

  editApearance() {
    this.editForm.forEach(element => {
      element.classList.add('input-isnew');
    });
  }
}
