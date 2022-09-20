import { Component, OnInit } from '@angular/core';
import { AuthService } from './App-Services/AuthService';
import { DataService } from './App-Services/data-service';
import { IAdmin } from './App-Services/Models/IAdmin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./Styles/fonts.scss', './app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService,
    private auth:AuthService) {}

  admin: IAdmin[] = this.dataService.getAdmin();
  falsing(){
    return false;
  }

  ngOnInit(): void {

    this.auth.loginCheck("BookAdmin", "Miyaneh.Book@1401");

    if (!localStorage.getItem("AdminID")) {
      localStorage.setItem("AdminID", this.admin[0].AdminID.toString())
    }
  }
  title = 'MookAdmin';
}
