import { Component, OnInit } from '@angular/core';
import { DataService } from '../../App-Services/data-service';
import { IAdmin } from '../../App-Services/Models/IAdmin';
import { IStudent } from '../../App-Services/Models/IStudent';
import { MatDialog } from '@angular/material/dialog';
import { ComponentNewRegisterComponent } from '../Component-new-register/component-new-register.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private dataservice: DataService,
    private dialog: MatDialog) { }

  public admin: IAdmin[] = this.dataservice.getAdmin();
  public student: IStudent[] = this.dataservice.getStudent();

  public AdminName: string = this.admin[0].AdminName;
  public language: string = 'Per';

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ComponentNewRegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
