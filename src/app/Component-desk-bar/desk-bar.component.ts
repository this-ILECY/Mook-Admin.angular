import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ExitMsgboxComponent } from '../1.Essential-components/Component-exit-msgbox/exit-msgbox.component';
import { YesNoMsgboxComponent } from '../1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';
import { AddressService } from '../App-Services/address.service';

@Component({
  selector: 'app-desk-bar',
  templateUrl: './desk-bar.component.html',
  styleUrls: ['../Styles/Variables.scss',
    './desk-bar.component.scss']
})
export class DeskBarComponent implements OnInit {

  public logo = this.address.getLogo()

  constructor(private address: AddressService,
    private dialog: MatDialog,
    private router: Router) { }

  public routeName = this.address.router

  ngOnInit(): void {
  }

  falsing(){
    return false
  }

  exit() {
    const dialogRef = this.dialog.open(ExitMsgboxComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.removeItem('data')
        this.router.navigate([this.address.router.login]).then(()=>{
          window.location.reload();
        });
      }
    });
  }
}