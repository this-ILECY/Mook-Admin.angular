import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from 'src/app/App-Services/Models/IStudent';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss']
})
export class ComponentNewRegisterComponent {

  constructor(public dialogRef: MatDialogRef<ComponentNewRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(this.data);
      
  }

}
