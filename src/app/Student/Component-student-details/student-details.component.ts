import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<StudentDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private dialog: MatDialog) {
    }

  ngOnInit(): void {
  }

  suspend(){
    let result = this.yesNo()
  }
  block() {
    let result = this.yesNo()
  }
  
  yesNo():boolean{
    let result!: boolean;
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
      result = res;
    });

    return result;
  }
}
