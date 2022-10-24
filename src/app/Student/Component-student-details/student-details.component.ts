import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/1.Essential-components/message-box/message-box.component';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { DataService } from 'src/app/App-Services/data-service';
import { IStudent } from 'src/app/App-Services/Models/IStudent';
import { LoginComponent } from 'src/app/Component-login/login.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private renderer: Renderer2,
    private dataService: DataService) {
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

  async suspend(id: number) {
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);
    dialogRef.afterClosed().subscribe(async res => {
      if (res) {
        let result: boolean = await this.dataService.suspendStudent(id);
        if (result) {
          this.dialogRef.close({ 
            result: result,
            isBlocked:this.selectedStudent.isBlocked,
            isSuspended:!this.selectedStudent.isSuspended
          });
        }
      }
    });

  }
  async block(id: number) {
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);

    dialogRef.afterClosed().subscribe(async (res) => {
      if (res) {
        let result: boolean = await this.dataService.blockStudent(id);
        if (result) {
          this.dialogRef.close({
            result: result,
            isBlocked:!this.selectedStudent.isBlocked,
            isSuspended:this.selectedStudent.isSuspended
          });
        }
      }
    });
  }


  async updateData(selectedStudent: IStudent) {
    selectedStudent.studentName = this.Name.nativeElement.value
    selectedStudent.studentSSID = this.SID.nativeElement.value
    selectedStudent.studentUniversityID = this.UniID.nativeElement.value
    let res = await this.dataService.updateStudent(selectedStudent);
    if (res) {
      this.disableEdit()
      this.dialog.open(MessageBoxComponent, { data: { message: this.dataService.message.infoUpdatedSuccessfully } })
    }
  }

  enableEdit() {
    this.editApearance()
    this.edit.nativeElement.classList.add('d-none');
    this.done.nativeElement.classList.remove('d-none');

    this.editForm.forEach(element => {
      this.renderer.removeAttribute(element, "disabled");
    });
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
