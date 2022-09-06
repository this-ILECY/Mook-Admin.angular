import { Injectable } from '@angular/core';
import { IAdmin } from './Models/IAdmin';
import { IBook } from './Models/IBook';
import { IComment } from './Models/IComment';
import { IPublisher } from './Models/IPublisher';
import { IRequestH, IRequestD, IRequestViewModel } from './Models/IRequestH';
import { IStudent, IStudentReport } from './Models/IStudent';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }


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
             IsAvailable:true , Author: "نوید نویدی"
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
             IsAvailable:true , Author: "دیوید هالیدی"
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
             IsAvailable:true , Author: "خاویر کرمنت"
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
             IsAvailable:false , Author: "بریان تریسی"
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
             IsAvailable:false , Author: "والتر وایت"
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
             IsAvailable:false , Author: "محمود فریدونی"
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
             IsAvailable:true , Author: "ویکتور هوگو"
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
             IsAvailable:true , Author: "چارلز دیکنز"
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
             IsAvailable:true , Author: "جمعی از اساتید"
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
             IsAvailable:false , Author: "یوبابا"
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
             IsAvailable:false , Author: "James Mark"
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
             IsAvailable:false , Author: "امام!"
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
             IsAvailable:false , Author: "آدولف هیتلر"
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
             IsAvailable:false , Author: "براندون مول"
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
             IsAvailable:false , Author: "سیدنی شلدون"
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
             IsAvailable:false , Author: "تالکین"
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
             IsAvailable:false , Author: "رولینگ"
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
             IsAvailable:false , Author: "توماس برنهارد"
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

    private Student: IStudent[] = [{
        studentID: 21,
        studentName: "سید علیرضا رضایی اصل",
        studentSSID: "002585258",
        studentUniversityID: "00452365",
        createdDate: "1500/13/65",
        updateDate: "1501/15/23",
        IsBlocked: false,
        IsSuspended: true,
        IsSpam: true,
        IsRegistered:false,
        SpamCount: 33
    },
    {
        studentID: 22,
        studentName: "مسعود مسعودی",
        studentSSID: "007585950",
        studentUniversityID: "971456213",
        createdDate: "1500/13/22",
        updateDate: "1501/08/09",
        IsBlocked: true,
        IsSuspended: true,
        IsSpam: true,
        IsRegistered:false,
        SpamCount: 45
    },
    {
        studentID: 23,
        studentName: "شیرین شیرین زاده",
        studentSSID: "008565987",
        studentUniversityID: "9715081050",
        createdDate: "1501/13/73",
        updateDate: "1502/19/99",
        IsBlocked: false,
        IsSuspended: false,
        IsSpam: false,
        IsRegistered:false,
        SpamCount: 0
    },
    {
        studentID: 24,
        studentName: "رضا رضایی",
        studentSSID: "002154515",
        studentUniversityID: "351564332",
        createdDate: "1000/00/02",
        updateDate: "1401/00/31",
        IsBlocked: true,
        IsSuspended: false,
        IsSpam: true,
        IsRegistered:true,
        SpamCount: 10
    },
    {
        studentID: 25,
        studentName: "سارا سارایی",
        studentSSID: "015455315",
        studentUniversityID: "68743563",
        createdDate: "1650/13/73",
        updateDate: "1600/19/99",
        IsBlocked: false,
        IsSuspended: true,
        IsSpam: true,
        IsRegistered:true,
        SpamCount: 1205
    },
    {
        studentID: 26,
        studentName: "اشکان اشکانیان",
        studentSSID: "351354353",
        studentUniversityID: "5666576",
        createdDate: "1400/13/73",
        updateDate: "1502/19/99",
        IsBlocked: false,
        IsSuspended: true,
        IsSpam: true,
        IsRegistered:false,
        SpamCount: 1
    },
    {
        studentID: 27,
        studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
        studentSSID: "0548584",
        studentUniversityID: "981523650",
        createdDate: "1500/13/22",
        updateDate: "1501/08/09",
        IsBlocked: true,
        IsSuspended: true,
        IsSpam: false,
        IsRegistered:false,
        SpamCount: 0
    }
    ]
    public getStudent() {
        return this.Student;
    }


    private Request: IRequestViewModel[] = [
        {
            RequestH: {
                RequestID: 1,
                studentID: 21,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 7,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                         IsAvailable:false , Author: "ویکتور هوگو"
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 5,
                        PubID: 1, bookName: "مرد مواد فروش",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1,
                         IsAvailable:false , Author: "والتر وایت"
                    },
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
                IsRegistered:false,
        SpamCount: 5
            },

        },
        {
            RequestH: {
                RequestID: 2,
                studentID: 22,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/11/12'
            },
            requestDetail: [
                {
                    RequestHID: 2,
                    RequestDID: 6,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 2,
                    RequestDID: 7,
                    BookID: 7,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                         IsAvailable:false , Author: "ویکتور هوگو"
                    },
                },
                {
                    RequestHID: 2,
                    RequestDID: 8,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 2,
                    RequestDID: 9,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    }
                },
                {
                    RequestHID: 2,
                    RequestDID: 10,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 10,
                        PubID: 1, bookName: "سیستم عامل",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 22,
                studentName: "مسعود مسعودی",
                studentSSID: "007585950",
                studentUniversityID: "971456213",
                createdDate: "1500/13/22",
                updateDate: "1501/08/09",
                IsRegistered:false,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 3,
                studentID: 23,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/08/09',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 7,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 7,
                        PubID: 1, bookName: "چگونه استاد راهنما شویم",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 11,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 12,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 13,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 14,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 3,
                    RequestDID: 15,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 23,
                studentName: "شیرین شیرین زاده",
                studentSSID: "008565987",
                studentUniversityID: "9715081050",
                createdDate: "1501/13/73",
                updateDate: "1502/19/99",
                IsRegistered:true,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 4,
                studentID: 24,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/05/29'
            },
            requestDetail: [
                {
                    RequestHID: 4,
                    RequestDID: 16,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 4,
                    RequestDID: 17,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 4,
                    RequestDID: 18,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 4,
                    RequestDID: 19,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 4,
                    RequestDID: 20,
                    BookID: 7,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 24,
                studentName: "رضا رضایی",
                studentSSID: "002154515",
                studentUniversityID: "351564332",
                createdDate: "1000/00/02",
                updateDate: "1401/00/31",
                IsRegistered:true,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/12/08'
            },
            requestDetail: [
                {
                    RequestHID: 5,
                    RequestDID: 21,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 22,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 23,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 24,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsRegistered:true,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/12/08',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 5,
                    RequestDID: 21,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 22,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 23,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 24,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 9,
                        PubID: 1, bookName: "دروس بی مزه",
                        PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsRegistered:false,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/12/08'
            },
            requestDetail: [
                {
                    RequestHID: 5,
                    RequestDID: 21,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 22,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 23,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 24,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsRegistered:false,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/12/08',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 5,
                    RequestDID: 21,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 22,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 23,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 24,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsRegistered:false,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/12/08',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 5,
                    RequestDID: 21,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 22,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 23,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 24,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsRegistered:false,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/12/08',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 5,
                    RequestDID: 21,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 22,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 23,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 24,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 7,
                        PubID: 1, bookName: "چگونه استاد راهنما شویم",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 5,
                    RequestDID: 25,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsRegistered:true,
        SpamCount: 5
            }
        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 21,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/10/10'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 3,
                        PubID: 1, bookName: "بیشعوری",
                        PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 5,
                        PubID: 1, bookName: "مرد مواد فروش",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1,
                         IsAvailable:true , Author: "والتر وایت"
                    },
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
                IsRegistered:true,
        SpamCount: 5
            },

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 21,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/10/10'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 3,
                        PubID: 1, bookName: "بیشعوری",
                        PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
                IsRegistered:true,
        SpamCount: 5
            },

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 21,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 9,
                        PubID: 1, bookName: "دروس بی مزه",
                        PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 3,
                        PubID: 1, bookName: "بیشعوری",
                        PubName: "کتاب های شهر", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
                IsRegistered:true,
        SpamCount: 5
            },

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 26,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: true,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 3,
                        PubID: 1, bookName: "بیشعوری",
                        PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                }
            ],
            student:
            {
                studentID: 27,
                studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
                studentSSID: "0548584",
                studentUniversityID: "981523650",
                createdDate: "1500/13/22",
                updateDate: "1501/08/09",
                IsBlocked: true,
                IsSuspended: true,
                IsRegistered:true,
        SpamCount: 32
            }

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 26,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 5,
                        PubID: 1, bookName: "مرد مواد فروش",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1,
                         IsAvailable:true , Author: "والتر وایت"
                    },
                }
            ],
            student:
            {
                studentID: 27,
                studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
                studentSSID: "0548584",
                studentUniversityID: "981523650",
                createdDate: "1500/13/22",
                updateDate: "1501/08/09",
                IsBlocked: true,
                IsSuspended: true,
                IsRegistered:false,
        SpamCount: 32
            }

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 26,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 7,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                         IsAvailable:true , Author: "ویکتور هوگو"
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 5,
                        PubID: 1, bookName: "مرد مواد فروش",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1,
                         IsAvailable:true , Author: "والتر وایت"
                    },
                }
            ],
            student:
            {
                studentID: 27,
                studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
                studentSSID: "0548584",
                studentUniversityID: "981523650",
                createdDate: "1500/13/22",
                updateDate: "1501/08/09",
                IsBlocked: true,
                IsSuspended: true,
                IsRegistered:false,
        SpamCount: 32
            }

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 26,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 6,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                         IsAvailable:false , Author: "محمود فریدونی"
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 7,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                         IsAvailable:false , Author: "ویکتور هوگو"
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 8,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 10,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 10,
                        PubID: 1, bookName: "سیستم عامل",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 5,
                        PubID: 1, bookName: "مرد مواد فروش",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1,
                         IsAvailable:false , Author: "والتر وایت"
                    },
                }
            ],
            student:
            {
                studentID: 27,
                studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
                studentSSID: "0548584",
                studentUniversityID: "981523650",
                createdDate: "1500/13/22",
                updateDate: "1501/08/09",
                IsBlocked: true,
                IsSuspended: true,
                IsRegistered:true,
        SpamCount: 32
            }

        },
        {
            RequestH: {
                RequestID: 1,
                studentID: 26,
                AdminID: 1,
                delayTime: 5, IsDelayed: true, IsAccepted: false,
                createdDate: '1401/10/10',
                RequestFinishedDate: '1502/12/12'
            },
            requestDetail: [
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 9,
                        PubID: 1, bookName: "دروس بی مزه",
                        PubName: "فروشگاه  شهر کتاب", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 1,
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "مهندسی نرم افزار",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 2,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 3,
                    BookID: 3,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 4,
                    BookID: 4,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
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
                        AdminID: 1
                    },
                },
                {
                    RequestHID: 1,
                    RequestDID: 5,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 5,
                        PubID: 1, bookName: "مرد مواد فروش",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1,
                         IsAvailable:true , Author: "والتر وایت"
                    },
                }
            ],
            student:
            {
                studentID: 27,
                studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
                studentSSID: "0548584",
                studentUniversityID: "981523650",
                createdDate: "1500/13/22",
                updateDate: "1501/08/09",
                IsBlocked: true,
                IsSuspended: true,
                IsRegistered:true,
        SpamCount: 32
            }

        },
    ]
    public getRequest() {
        return this.Request;
    }


    private publisher: IPublisher[] = [
        {
            PublisherID: 1,
            PublisherName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی ",
            PublisherPhone: "09141414114",
            publisherAddress: " شهر خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1400/12/12',
            IsDeleted: false,
        },
        {
            PublisherID: 2,
            PublisherName: "کتاب های شهر",
            PublisherPhone: "09121212112",
            publisherAddress: " شهر خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1404/10/12',
            IsDeleted: false,
        },
        {
            PublisherID: 3,
            PublisherName: "نشر کتاب",
            PublisherPhone: "09131313113",
            publisherAddress: " شهر خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1500/09/05',
            IsDeleted: false,
        },
        {
            PublisherID: 4,
            PublisherName: "فروشگاه  شهر کتاب",
            PublisherPhone: "09131313113",
            publisherAddress: " شهر خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1500/09/05',
            IsDeleted: false,
        },
    ]
    public getPublisher() {
        return this.publisher;
    }

    private studentReport: IStudentReport[] = [
        {
            studentID: 21,
            studentName: "سید علیرضا رضایی اصل",
            studentSSID: "002585258",
            studentUniversityID: "00452365",
            registerDate: "1500/13/65",
            RequestCount: 10,
            RequsetDelayCount: 8,
            LongestDelay: "285 day",
            BookRent: 326,
            BookLost: 12, BookDamaged: 325,
        },
        {
            studentID: 22,
            studentName: "مسعود مسعودی",
            studentSSID: "007585950",
            studentUniversityID: "971456213",
            registerDate: "1500/13/22",
            RequestCount: 10,
            RequsetDelayCount: 8,
            LongestDelay: "285 day",
            BookRent: 326,
            BookLost: 12, BookDamaged: 325
        },
        {
            studentID: 23,
            studentName: "شیرین شیرین زاده",
            studentSSID: "008565987",
            studentUniversityID: "9715081050",
            registerDate: "1501/13/73",
            RequestCount: 10,
            RequsetDelayCount: 8,
            LongestDelay: "285 day",
            BookRent: 326,
            BookLost: 12, BookDamaged: 325,
        },
        {
            studentID: 24,
            studentName: "رضا رضایی",
            studentSSID: "002154515",
            studentUniversityID: "351564332",
            registerDate: "1000/00/02",
            RequestCount: 10,
            RequsetDelayCount: 8,
            LongestDelay: "285 day",
            BookRent: 326,
            BookLost: 12, BookDamaged: 325,
        },
        {
            studentID: 25,
            studentName: "سارا سارایی",
            studentSSID: "015455315",
            studentUniversityID: "68743563",
            registerDate: "1650/13/73",
            RequestCount: 10,
            RequsetDelayCount: 8,
            LongestDelay: "285 day",
            BookRent: 326,
            BookLost: 12, BookDamaged: 325,
        },
        {
            studentID: 26,
            studentName: "اشکان اشکانیان",
            studentSSID: "351354353",
            studentUniversityID: "5666576",
            registerDate: "1400/13/73",
            RequestCount: 10,
            RequsetDelayCount: 8,
            LongestDelay: "285 day",
            BookRent: 326,
            BookLost: 12, BookDamaged: 325,
        }]
    public getStudentReport() {
        return this.studentReport;
    }


    //comment header less than 20 words
    private comment: IComment[] = [
        {
            CommentID: 1,
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
                IsBlocked: false,
                IsSuspended: true,
                IsSpam: true,
                IsRegistered:true,
        SpamCount: 33
            },
            commentHeader: "افتضاح",
            commentBody: "کتاب بشدت مزخرفی بود",
            createdDate: "1401/01/21",
            bookID: 2
        },
        {
            CommentID: 3,
            student: {
                studentID: 24,
                studentName: "رضا رضایی",
                studentSSID: "002154515",
                studentUniversityID: "351564332",
                createdDate: "1000/00/02",
                updateDate: "1401/00/31",
                IsBlocked: true,
                IsSuspended: false,
                IsSpam: true,
                IsRegistered:false,
        SpamCount: 10
            },
            commentHeader: "باید ریخت سطل آشغال",
            commentBody: "نویسنده ی این کتاب با مغز معیوبش سعی کرده کتاب بنویسه این کاملا مسخره ست. به نظرم باید این کتاب رو با نویسنده اش سوزوند.",
            createdDate: "1401/01/22",
            bookID: 2
        },
        {
            CommentID: 4,
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
                IsBlocked: false,
                IsSuspended: true,
                IsSpam: true,
                IsRegistered:false,
        SpamCount: 1205
            },
            commentHeader: "نویسنده اش احمقه",
            createdDate: "1501/01/22",
            bookID: 2
        },
        {
            CommentID: 8,
            student: {
                studentID: 24,
                studentName: "رضا رضایی",
                studentSSID: "002154515",
                studentUniversityID: "351564332",
                createdDate: "1000/00/02",
                updateDate: "1401/00/31",
                IsBlocked: true,
                IsSuspended: false,
                IsSpam: true,
                IsRegistered:false,
        SpamCount: 10
            },
            commentHeader: "&^%&% *^*^*&)^ )*&*)",
            createdDate: "1401/01/22",
            bookID: 2
        },
        {
            CommentID: 10,
            student: {
                studentID: 24,
                studentName: "رضا رضایی",
                studentSSID: "002154515",
                studentUniversityID: "351564332",
                createdDate: "1000/00/02",
                updateDate: "1401/00/31",
                IsBlocked: true,
                IsSuspended: false,
                IsSpam: true,
                IsRegistered:false,
        SpamCount: 10
            },
            commentHeader: "09121212112 *@#% $%@$#@$% ",
            createdDate: "1401/01/22",
            bookID: 2
        }
    ]
    public getComment() {
        return this.comment;
    }
}