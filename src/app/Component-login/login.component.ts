import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AddressService } from '../App-Services/address.service';
import { AuthService } from '../App-Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2, private address: AddressService,
    private auth: AuthService) { }

  public logoPath !: string;
  public loginImg !: string;

  @ViewChild('submit', { static: true }) submit: ElementRef
  @ViewChild('main', { static: true }) main: ElementRef

  ngOnInit(): void {
    this.loginImg = this.address.getLoginImg();
    this.logoPath = this.address.getPurpleLogo();
  }
  //login function called by "tenet-register-login-submit" button
  public async mookSignIn(event: Event, username: string, password: string) {

    event.preventDefault();

    this.fromValidation(username, password)
    let result

    if (username.length !== 0 && password.length !== 0) {
      result = this.auth.loginCheck(username, password);
    }
    let s = this.auth.checkToken()
    console.log(s);
  }

  fromValidation(username: string, password: string) {
    if (username.length === 0 && password.length === 0) {
      let inputs = document.querySelectorAll(".login-input");
      inputs.forEach(element => {
        if (!element.classList.contains("input-invalid")) {
          element.classList.add("input-invalid");
        }
      });
      let passmatch = document.querySelector(".passmatch-text");
      passmatch.innerHTML = "لطفا اطلاعات را وارد نمایید";
      passmatch.classList.remove("d-none");
    }

  }

}
