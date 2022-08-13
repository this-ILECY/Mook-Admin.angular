import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-yes-no-msgbox',
  templateUrl: './yes-no-msgbox.component.html',
  styleUrls: ['./yes-no-msgbox.component.scss']
})
export class YesNoMsgboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<YesNoMsgboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  yesNo = {
    yes: 1,
    no: 0
  }

  ngOnInit(): void {
  }

}
