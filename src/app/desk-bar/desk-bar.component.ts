import { Component, OnInit } from '@angular/core';
import { AddressService } from '../Services/address.service';

@Component({
  selector: 'app-desk-bar',
  templateUrl: './desk-bar.component.html',
  styleUrls: ['../Styles/Colors.scss',
    './desk-bar.component.scss']
})
export class DeskBarComponent implements OnInit {

  constructor(private address: AddressService) { }

  public logo = this.address.getLogo()
  public icon = this.address.getIcon()
  ngOnInit(): void {
  }

}
