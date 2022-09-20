import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccessGuard } from '../App-Services/access.guard';
import { AddressService } from '../App-Services/address.service';
import { AuthService } from '../App-Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2, private address: AddressService,
    private auth: AuthService, private router: Router, private access: AccessGuard) { }

  public logoPath !: string;
  public loginImg !: string;

  @ViewChild('submit', { static: true }) submit: ElementRef
  @ViewChild('main', { static: true }) main: ElementRef

  ngOnInit(): void {
    let canShow = this.access.canActivate()

    if (canShow) {
      this.router.navigate([this.address.router.student])
    }

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
    let checked = this.auth.checkToken()
    if (result && checked) {
      this.router.navigate([this.address.router.student]).then(()=>{
        window.location.reload();
      });
    } else {
      this.fromValidation(username, password)
    }

  }

  fromValidation(username: string, password: string) {
    let passmatch = document.querySelector(".passmatch-text");
    let inputs = document.querySelectorAll(".login-input");
    inputs.forEach(element => {
      if (!element.classList.contains("input-invalid")) {
        element.classList.add("input-invalid");
      }
    });
    if (username.length === 0 && password.length === 0) {
      passmatch.innerHTML = "لطفا اطلاعات را وارد نمایید";
    } else {
      passmatch.innerHTML = "عدم تطابق اطلاعات";
    }
    passmatch.classList.remove("d-none");

  }

}
