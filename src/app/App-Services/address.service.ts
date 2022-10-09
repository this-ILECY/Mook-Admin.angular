import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  private baseUrl = "https://localhost:7267/api";
  public getBaseUrl() {
    return this.baseUrl;
  }

  private UrlAddress = {
    commentList: "/Comment",
    commentAccept:"/Comment/a/",
    commentDelete:"/Comment/",
    requestList:"/Request",
    studentReport:"/Student/rpt",
    studentList:"/Student"

  }
  public getUrlAddress() {
    return this.UrlAddress;
  }


  private logo = "/assets/logo/logoWhite.png"
  public getLogo() { return this.logo }

  private Purplelogo = "/assets/logo/logoPurple.png"
  public getPurpleLogo() { return this.Purplelogo }

  private loginImg = "/assets/img/login-img.png"
  public getLoginImg() { return this.loginImg }

  public router = {
    student: "student",
    book: "book",
    main: "main",
    history: "history",
    login: "login"
  }

}
