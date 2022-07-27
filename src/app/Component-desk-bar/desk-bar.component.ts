import { Component, OnInit } from '@angular/core';
import { AddressService } from '../App-Services/address.service';

@Component({
  selector: 'app-desk-bar',
  templateUrl: './desk-bar.component.html',
  styleUrls: ['../Styles/Variables.scss',
    './desk-bar.component.scss']
})
export class DeskBarComponent implements OnInit {

  public logo = this.address.getLogo()

  constructor(private address: AddressService) { }


  ngOnInit(): void {
  }

}