import { Component, OnInit } from '@angular/core';
import { DataService } from './App-Services/data-service';
import { IAdmin } from './App-Services/Models/IAdmin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./Styles/fonts.scss', './app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {}

  admin: IAdmin[] = this.dataService.getAdmin();

  ngOnInit(): void {
    if (!localStorage.getItem("AdminID")) {
      localStorage.setItem("AdminID", this.admin[0].AdminID.toString())
    }
  }
  title = 'MookAdmin';
}
