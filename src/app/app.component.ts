import { Component, OnInit } from '@angular/core';
import { AccessGuard } from './App-Services/access.guard';
import { AuthService } from './App-Services/AuthService';
import { DataService } from './App-Services/data-service';
import { IAdmin } from './App-Services/Models/IAdmin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./Styles/fonts.scss', './app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService, private access: AccessGuard) { }

  admin: IAdmin[] = this.dataService.getAdmin();
  public canShow: any = false;

  falsing() {
    return false;
  }

  ngOnInit(): void {

    this.canShow = this.access.canActivate();

    if (!localStorage.getItem("AdminID")) {
      localStorage.setItem("AdminID", this.admin[0].AdminID.toString())
    }
  }
  title = 'MookAdmin';
}
