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
    Book: "/Book",
    commentList: "/Comment",
    commentAccept:"/Comment/a/",
    commentDelete:"/Comment/",
    requestList:"/Request",
    studentReport:"/Student/rpt",
    studentList:"/Student",
    studentChange:"/Student?id={0}&method={1}",
    newRegisterDelete:"/Student/",
    requestAccept:"/Request/",
    requestDelete:"/Request/",

  }
  public getUrlAddress() {
    return this.UrlAddress;
  }

  private methods = {
    student: {
      IsBlocked: 0,
      IsRegistered: 1,
      IsSuspended: 2
    }
  }
  public getMethod(){
    return this.methods;
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
