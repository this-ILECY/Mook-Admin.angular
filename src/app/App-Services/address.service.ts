import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  private logo = "/assets/logo/logoWhite.png"
  public getLogo() { return this.logo }


}
