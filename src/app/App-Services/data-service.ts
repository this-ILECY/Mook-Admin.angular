import { Injectable } from '@angular/core';
import { IAdmin } from './Models/IAdmin';
import { IBook, IbookToBuy } from './Models/IBook';
import { IComment } from './Models/IComment';
import { IPublisher } from './Models/IPublisher';
import { IRequestViewModel } from './Models/IRequestH';
import { IStudent, IStudentReport } from './Models/IStudent';
import * as $ from 'jquery';
import { AddressService } from './address.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private address: AddressService) { }



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

    private Book: IBook[] = [
        {
            bookID: 1,
            PubID: 1, bookName: "مهندسی نرم افزار",
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: true, Author: "نوید نویدی"
        },
        {
            bookID: 2,
            bookName: "فیزیک هالیدی",
            PubID: 2,
            PubName: "کتاب های شهر",
            bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: true, Author: "دیوید هالیدی"
        },
        {
            bookID: 3,
            PubID: 1, bookName: "بیشعوری",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: true, Author: "خاویر کرمنت"
        },
        {
            bookID: 4,
            bookName: "غورباقه ات را قورت بده",
            PubID: 2,
            PubName: "کتاب های شهر",
            bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "بریان تریسی"
        },
        {
            bookID: 5,
            PubID: 1, bookName: "مرد مواد فروش",
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "والتر وایت"
        },
        {
            bookID: 6,
            bookName: "میکروکنترلر",
            PubID: 2,
            PubName: "کتاب های شهر", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "محمود فریدونی"
        },
        {
            bookID: 7,
            PubID: 1, bookName: "چگونه استاد راهنما شویم",
            PubName: "کتاب های شهر", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: true, Author: "ویکتور هوگو"
        },
        {
            bookID: 8,
            bookName: "حسن کچل",
            PubID: 4,
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: true, Author: "چارلز دیکنز"
        },
        {
            bookID: 9,
            PubID: 1, bookName: "دروس بی مزه",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: true, Author: "جمعی از اساتید"
        },
        {
            bookID: 10,
            PubID: 1, bookName: "سیستم عامل",
            PubName: "کتاب های شهر", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "یوبابا"
        },
        {
            bookID: 11,
            bookName: "Advanced English Grammar",
            PubID: 4,
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "James Mark"
        },
        {
            bookID: 12,
            bookName: "وصایای امام!",
            PubID: 4,
            PubName: "فروشگاه شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "امام!"
        },
        {
            bookID: 13,
            bookName: "نبرد من",
            PubID: 4,
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "آدولف هیتلر"
        },
        {
            bookID: 14,
            bookName: "دنیای خالی از قهرمان",
            PubID: 4,
            PubName: "کتاب های شهر", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "براندون مول"
        },
        {
            bookID: 15,
            bookName: "در جست و جوی معما",
            PubID: 4,
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "سیدنی شلدون"
        },
        {
            bookID: 16,
            bookName: "سیلماریلیون",
            PubID: 4,
            PubName: "فروشگاه آخرین کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "تالکین"
        },
        {
            bookID: 17,
            bookName: "هری پاتر",
            PubID: 4,
            PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "رولینگ"
        },
        {
            bookID: 18,
            bookName: "آشفتگی",
            PubID: 4,
            PubName: "فروشگاه بزرگ شهر ", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1,
            IsAvailable: false, Author: "توماس برنهارد"
        }
    ]
    public getBook() {
        return this.Book;
    }

    private Admin: IAdmin[] = [{
        AdminID: 1,
        AdminName: "امیرحسین",
        AdminPhone: "09123421550",
        createdDate: "1401/08/35",
        updateDate: "1401/13/68",
        IsDeleted: false,
    }]
    public getAdmin() {
        return this.Admin;
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
        let requestChange = this.address.getUrlAddress().requestChange.replace("{0}", id.toString())
            .replace("{1}", this.address.getMethod().requestMethods.IsRegistered.toString())
        var settings = {
            "url": this.address.getBaseUrl() + requestChange,
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


    /************************************************************************************************/
    /************************************************************************************************/
    /***************************************  student api  ******************************************/
    /************************************************************************************************/
    /************************************************************************************************/
    private studentReport: IStudentReport[] = []
    private Student: IStudent[] = [];

    public getStudentReport() {
        return this.GetStudentReport();
    }
    public getStudent() {
        return this.GetStudent();
    }
    public acceptNewRegister(id: number) {
        return this.AcceptNewRegister(id);
    }
    public deleteNewRegister(id: number) {
        return this.DeleteNewRegister(id)
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
    private async GetStudent() {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().studentList,
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
    private async AcceptNewRegister(id: number) {
        var settings = {
            "url": this.address.getBaseUrl() + this.address.getUrlAddress().newRegisterAccept + id,
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