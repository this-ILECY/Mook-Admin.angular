import { Injectable } from '@angular/core';
import { IAdmin } from './Models/IAdmin';
import { IBook, IbookToBuy } from './Models/IBook';
import { IComment } from './Models/IComment';
import { IRequestViewModel } from './Models/IRequestH';
import { IStudent, IStudentReport } from './Models/IStudent';
import * as $ from 'jquery';
import { AddressService } from './address.service';
import { date } from './date.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private address: AddressService) { }


    private Admin: IAdmin[] = [{
        adminID: 1,
        adminName: "امیرحسین",
        adminPhone: "09123421550",
        createdDate: "1401/08/35",
        updateDate: "1401/13/68",
        isDeleted: false,
    }]
    public getAdmin() {
        return this.Admin;
    }
    /************************************************************************************************/
    /************************************************************************************************/
    /****************************************  Message **********************************************/
    /************************************************************************************************/
    /************************************************************************************************/

    public message = {
        infoUpdatedSuccessfully: "اطلاعات با موفقیت آپدیت شد"
    }


    /************************************************************************************************/
    /************************************************************************************************/
    /***************************************  Book api  *********************************************/
    /************************************************************************************************/
    /************************************************************************************************/
    private bookToBuy: IbookToBuy[] = [
        {
            bookToBuyId: 1,
            studentId: 1,
            bookName: "کتاب 1",
            bookAuthor: "نویسنده 1",
            bookPublisher: "انتشارات 1"
        },
        {
            bookToBuyId: 2,
            studentId: 2,
            bookName: "کتاب 2",
            bookAuthor: "نویسنده 2",
            bookPublisher: "انتشارات 2"
        },
        {
            bookToBuyId: 3,
            studentId: 3,
            bookName: "کتاب 3",
            bookAuthor: "نویسنده 3",
            bookPublisher: "انتشارات 3"
        },
        {
            bookToBuyId: 4,
            studentId: 4,
            bookName: "کتاب 4",
            bookAuthor: "نویسنده 4",
            bookPublisher: "انتشارات 4"
        }
    ];
    public getBookToBuy() {
        return this.bookToBuy;
    }

    private Book: IBook[] = []

    public updateBook(book: IBook) {
        return this.UpdateBook(book);
    }
    public createBook(book: IBook) {
        return this.CreateBook(book);
    }
    public getBook() {
        return this.GetBook();
    }

    private async GetBook() {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().Book,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };
        this.Book = await $.ajax(settings).done(function (response) {
            return response;

        });
        return this.Book;
    }
    private async UpdateBook(book: IBook) {

        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().Book,
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            "data": JSON.stringify({
                "bookID": book.bookID,
                "bookName": book.bookName,
                "bookPagesCount": book.bookPagesCount,
                "bookRating": book.bookRating,
                "publisher": book.publisher,
                "author": book.author,
                "bookRatingCount": book.bookratingCount,
                "bookDescription": book.bookDescription,
                "isAvailable": book.isAvailable,
                "createdDate": book.createdDate,
                "isDamaged": book.isDamaged
            }),
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async CreateBook(book: IBook) {

        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().Book,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            "data": JSON.stringify({
                "bookID": book.bookID,
                "AcceptedAdminID": book.adminID,
                "bookName": book.bookName,
                "bookPagesCount": book.bookPagesCount,
                "bookRating": book.bookRating,
                "publisher": book.publisher,
                "author": book.author,
                "bookRatingCount": book.bookratingCount,
                "bookDescription": book.bookDescription,
                "isAvailable": book.isAvailable,
                "createdDate": book.createdDate,
                "isDamaged": book.isDamaged
            }),
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }


    /************************************************************************************************/
    /************************************************************************************************/
    /***************************************  request api  ******************************************/
    /************************************************************************************************/
    /************************************************************************************************/


    private Request: IRequestViewModel[] = []
    public getRequest() {
        return this.GetRequest()
    }
    public acceptRequest(id: number) {
        return this.AcceptRequest(id);
    }
    public deleteRequest(id: number) {
        return this.DeleteRequest(id);
    }
    public createRequest(request: IRequestViewModel) {
        return this.CreateRequest(request);
    }

    private async GetRequest() {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().requestList,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        this.Request = await $.ajax(settings).done(function (response) {
            return response;

        });
        return this.Request;
    }
    private async AcceptRequest(id: number) {

        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().requestAccept + id,
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async DeleteRequest(id: number) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().requestDelete + id,
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async CreateRequest(request: IRequestViewModel) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().requestList,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            "data": JSON.stringify({
                requestID: request.requestID,
                studentID: request.studentID,
                requestAcceptedDate: request.requestAcceptedDate,
                isAccepted: request.isAccepted,
                requestFinishedDate: request.requestFinishedDate,
                isDelayed: request.isDelayed,
                delayDays: request.delayDays,
                requestDecription: request.requestDecription,
                createdDate: date.now(),
                isDeleted: request.isDeleted,
                requestDetails: request.requestDetails,
                students: request.students,
            }),
            // "data": JSON.stringify({
            //     "requestID": request.requestID,
            //     "studentID": request.studentID,
            //     "requestAcceptedDate": request.requestAcceptedDate,
            //     "isAccepted": false,
            //     "requestFinishedDate": null,
            //     "isDelayed": false,
            //     "delayDays": 0,
            //     "requestDecription": "",
            //     "createdDate": date.now(),
            //     "isDeleted": false,
            //     "requestDetails": [
            //       {
            //         "requestDetailID": -6714494,
            //         "requestHeaderID": -94141231,
            //         "bookID": -80081852,
            //         "books": {
            //           "bookID": -36604591,
            //           "acceptedAdminID": -97080096,
            //           "bookName": "enim tempor est ut",
            //           "bookPagesCount": -55287901,
            //           "bookRating": 48775824.62162477,
            //           "publisher": "aute ut sunt",
            //           "author": "anim consequat in consectetur dolore",
            //           "bookRatingCount": -67461384,
            //           "bookDescription": "dolor ut",
            //           "isAvailable": false,
            //           "isDamaged": true,
            //           "createdDate": "cillum cupidatat"
            //         },
            //         "requestDetailDescription": "incididunt sed",
            //         "isDamaged": false,
            //         "isLost": true
            //       },
            //       {
            //         "requestDetailID": -88684681,
            //         "requestHeaderID": 97641356,
            //         "bookID": 98472638,
            //         "books": {
            //           "bookID": -91869192,
            //           "acceptedAdminID": 15133666,
            //           "bookName": "mollit",
            //           "bookPagesCount": 5443725,
            //           "bookRating": -8269378.559137672,
            //           "publisher": "tempor",
            //           "author": "aliqua ",
            //           "bookRatingCount": -72721760,
            //           "bookDescription": "dolore Duis",
            //           "isAvailable": true,
            //           "isDamaged": true,
            //           "createdDate": "labore ex"
            //         },
            //         "requestDetailDescription": "officia commodo",
            //         "isDamaged": false,
            //         "isLost": false
            //       }
            //     ],
            //     "students": request.students
            //     }),
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }


    /************************************************************************************************/
    /************************************************************************************************/
    /***************************************  student api  ******************************************/
    /************************************************************************************************/
    /************************************************************************************************/
    private studentReport: IStudentReport[] = []
    private Students: IStudent[] = [];
    private Student:IStudent = null;

    public getStudentReport() {
        return this.GetStudentReport();
    }
    public getStudent() {
        return this.GetStudent();
    }
    public getStudentByID(id:number) {
        return this.GetStudentByID(id);
    }
    public acceptNewRegister(id: number) {
        return this.AcceptNewRegister(id);
    }
    public deleteNewRegister(id: number) {
        return this.DeleteNewRegister(id)
    }
    public updateStudent(student: IStudent) {
        return this.UpdateStudent(student);
    }
    public createStudent(student: IStudent) {
        return this.CreateStudent(student);
    }
    public suspendStudent(id: number) {
        return this.SuspendStudent(id);
    }
    public blockStudent(id: number) {
        return this.BlockStudent(id);
    }

    private async GetStudentReport() {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().studentReport,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        this.studentReport = await $.ajax(settings).done(function (res) {
            return res;
        });
        return this.studentReport;
    }
    private async GetStudentByID(id:number) {        
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().studentList + "/" + id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        this.Student = await $.ajax(settings).done(function (res) {
            return res;
        });
        return this.Student;
    }
    private async GetStudent() {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().studentList,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        this.Students = await $.ajax(settings).done(function (res) {
            return res;
        });
        return this.Students;
    }
    private async AcceptNewRegister(id: number) {
        let studentChange = this.address.getUrlAddress().studentChange
            .replace("{0}", id.toString()).replace("{1}", this.address.getMethod().student.IsRegistered.toString())
        var settings = {
            "url": this.address.getBaseUrl() + studentChange,
            "method": "PATCH",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async DeleteNewRegister(id: number) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().newRegisterDelete + id,
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async UpdateStudent(student: IStudent) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().studentList,
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            "data": JSON.stringify({
                "studentID": student.studentID,
                "studentName": student.studentName,
                "studentSSID": student.studentSSID,
                "studentUniversityID": student.studentUniversityID,
                "spamCount": student.spamCount,
                "isSuspended": student.isSuspended,
                "isRegistered": student.isRegistered,
                "createdDate": student.createdDate,
                "isBlocked": student.isBlocked,
                "reportPoint": student.reportPoint,
                "isSpam": student.isSpam
            }),
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async CreateStudent(student: IStudent) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().studentList,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            "data": JSON.stringify({
                "studentID": student.studentID,
                "studentName": student.studentName,
                "studentSSID": student.studentSSID,
                "studentUniversityID": student.studentUniversityID,
                "spamCount": student.spamCount,
                "isSuspended": student.isSuspended,
                "isRegistered": student.isRegistered,
                "createdDate": student.createdDate,
                "isBlocked": student.isBlocked,
                "reportPoint": student.reportPoint,
                "isSpam": student.isSpam,
                "AcceptedAdminID": student.adminID
            }),
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async SuspendStudent(id: number) {
        let studentChange = this.address.getUrlAddress().studentChange
            .replace("{0}", id.toString()).replace("{1}", this.address.getMethod().student.IsSuspended.toString())
        var settings = {
            "url": this.address.getBaseUrl() + studentChange,
            "method": "PATCH",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }
    private async BlockStudent(id: number) {
        let studentChange = this.address.getUrlAddress().studentChange
            .replace("{0}", id.toString()).replace("{1}", this.address.getMethod().student.IsBlocked.toString())
        var settings = {
            "url": this.address.getBaseUrl() + studentChange,
            "method": "PATCH",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        let result: boolean = await $.ajax(settings).done(res => {
            return res;
        });
        return result;
    }

    /************************************************************************************************/
    /************************************************************************************************/
    /***************************************  comment api  ******************************************/
    /************************************************************************************************/
    /************************************************************************************************/
    //comment header less than 20 words
    private comment: IComment[] = []

    public getComment() {
        return this.getCommentList()
    }
    public acceptComment(id: number) {
        this.AcceptComment(id);
    }
    public deleteComment(id: number) {
        this.DeleteComment(id);
    }

    private async getCommentList() {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().commentList,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        this.comment = await $.ajax(settings).done(function (res) {
            return res;
        });
        return this.comment;
    }
    private async AcceptComment(id: number) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().commentAccept + id,
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        await $.ajax(settings);
    }
    private async DeleteComment(id: number) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().commentDelete + id,
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Accept": "text/plain"
            },
        };

        await $.ajax(settings);
    }


}