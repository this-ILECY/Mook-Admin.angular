import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  private logo = "/assets/logo/logoWhite.png"
  public getLogo() { return this.logo }

  private icon = {
    home: "assets/icon/COCO/Line/Home.svg",
    home2: "assets/icon/COCO/Line/Home2.svg",
  }
  public getIcon() { return this.icon}
}
