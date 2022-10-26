import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { DataService } from 'src/app/App-Services/data-service';
import { date } from 'src/app/App-Services/date.service';
import { IStudent } from 'src/app/App-Services/Models/IStudent';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dataservice: DataService) {
  }

  //elements from html file
  @ViewChild('name', { static: true }) name: ElementRef
  @ViewChild('uniID', { static: true }) uniID: ElementRef
  @ViewChild('SID', { static: true }) SID: ElementRef
  @ViewChild('done', { static: true }) done: ElementRef
  @ViewChild('edit', { static: true }) edit: ElementRef
  //on intialization
  ngOnInit(): void {
  }

  async save() {
    let validate = this.formValidarion()

    if (validate) {

      let student: IStudent = {
        studentID: 0,
        studentName: this.name.nativeElement.value,
        studentUniversityID: this.uniID.nativeElement.value,
        studentSSID: this.SID.nativeElement.value,
        createdDate: date.now(),
        updateDate: date.now(),
        adminID: this.dataservice.getAdmin()[0].adminID,
        userID: 0,
        spamCount: 0,
        isBlocked: false,
        isDeleted: false,
        isSuspended: false,
        isSpam: false,
        reportPoint: 0,
        isRegistered: false
      }

      await this.dataservice.createStudent(student);

    }
  }

  formValidarion() {
    let nameBool: boolean = this.name.nativeElement.value.length > 2
    let uniBool: boolean = this.uniID.nativeElement.value.length > 2 && !isNaN(this.uniID.nativeElement.value)
    let sinBool: boolean = this.SID.nativeElement.value.length > 2 && !isNaN(this.SID.nativeElement.value)

    if (!nameBool) this.name.nativeElement.classList.add("input-invalid"); else this.name.nativeElement.classList.remove("input-invalid")
    if (!uniBool) this.uniID.nativeElement.classList.add("input-invalid"); else this.uniID.nativeElement.classList.remove("input-invalid")
    if (!sinBool) this.SID.nativeElement.classList.add("input-invalid"); else this.SID.nativeElement.classList.remove("input-invalid")

    if (nameBool && uniBool && sinBool) {
      return true;
    } else {
      return false;
    }
  }



}
