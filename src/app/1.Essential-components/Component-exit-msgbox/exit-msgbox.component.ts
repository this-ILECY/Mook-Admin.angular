
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-msgbox',
  templateUrl: './exit-msgbox.component.html',
  styleUrls: ['./exit-msgbox.component.scss']
})
export class ExitMsgboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExitMsgboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  yesNo = {
    yes: 1,
    no: 0
  }

  ngOnInit(): void {
  }

}


