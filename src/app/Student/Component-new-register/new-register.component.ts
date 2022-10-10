import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/App-Services/data-service';
import { IStudent } from 'src/app/App-Services/Models/IStudent';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss']
})
export class NewRegisterComponent {

  constructor(public dialogRef: MatDialogRef<NewRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {

  }

  async setAcceptedAdmin(id: number) {
    let result: boolean = await this.dataService.acceptNewRegister(id);

    if (result) {
      this.dialogRef.close(result);
    }
  }

  async setDeletedRegister(id: number) {
    let result: boolean = await this.dataService.deleteNewRegister(id);
    if (result) {
      this.dialogRef.close(result);
    }
  }

}
