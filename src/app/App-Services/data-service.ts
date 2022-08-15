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
            PubID: 1, bookName: "book1",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 2,
            PubID: 1, bookName: "book2",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 3,
            PubID: 1, bookName: "book3",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 4,
            PubID: 1, bookName: "book4",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 5,
            PubID: 1, bookName: "book5",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 6,
            PubID: 1, bookName: "book6",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 7,
            PubID: 1, bookName: "book7",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 8,
            PubID: 1, bookName: "book8",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 9,
            PubID: 1, bookName: "book9",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID: 10,
            PubID: 1, bookName: "book10",
            PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
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
                    BookID: 1,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book2",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book3",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book4",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book5",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                },
                {
                    RequestHID: 2,
                    RequestDID: 7,
                    BookID: 2,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        bookID: 1,
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book9",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
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
                        PubID: 1, bookName: "book10",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        bookID: 1,
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 23,
                studentName: "شیرین شیرین زاده",
                studentSSID: "008565987",
                studentUniversityID: "9715081050",
                createdDate: "1501/13/73",
                updateDate: "1502/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                },
                {
                    RequestHID: 4,
                    RequestDID: 20,
                    BookID: 5,
                    description: "string",
                    IsDamaged: false,
                    IsLost: false,
                    book:
                    {
                        bookID: 1,
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 24,
                studentName: "رضا رضایی",
                studentSSID: "002154515",
                studentUniversityID: "351564332",
                createdDate: "1000/00/02",
                updateDate: "1401/00/31",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                },
            ],
            student: {
                studentID: 25,
                studentName: "سارا سارایی",
                studentSSID: "015455315",
                studentUniversityID: "68743563",
                createdDate: "1650/13/73",
                updateDate: "1600/19/99",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book2",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book3",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book4",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book5",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book2",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book3",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book4",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book5",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
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
                        bookID: 1,
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book2",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book3",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book4",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book5",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
                }
            ],
            student: {
                studentID: 21,
                studentName: "سید علیرضا رضایی اصل",
                studentSSID: "002585258",
                studentUniversityID: "00452365",
                createdDate: "1500/13/65",
                updateDate: "1501/15/23",
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book2",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book3",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book4",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book5",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book1",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book2",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book3",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book4",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
                        PubID: 1, bookName: "book5",
                        PubName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه", bookPagesCount: 320,
                        bookRating: 3.2,
                        BookratingCount: 56,
                        bookDescription: "a book",
                        createdDate: '1401/05/06',
                        UpdateDate: '1401/06/17',
                        IsDeleted: false,
                        AdminID: 1
                    }
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
            PublisherName: "انتشارات دانشجویان جوان دانشکده فنی مهندسی میانه",
            PublisherPhone: "09141414114",
            publisherAddress: "میانه خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1400/12/12',
            IsDeleted: false,
        },
        {
            PublisherID: 2,
            PublisherName: "کتاب های میانه",
            PublisherPhone: "09121212112",
            publisherAddress: "میانه خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1404/10/12',
            IsDeleted: false,
        },
        {
            PublisherID: 3,
            PublisherName: "نشر کتاب",
            PublisherPhone: "09131313113",
            publisherAddress: "میانه خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
            CreatedDate: '1500/09/05',
            IsDeleted: false,
        },
        {
            PublisherID: 4,
            PublisherName: "",
            PublisherPhone: "09131313113",
            publisherAddress: "میانه خیابان 1 پلاک 2 کوچه 3 طبقه 4 واحد 5",
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
            BookDamaged: 325,
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
            BookDamaged: 325
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
            BookDamaged: 325,
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
            BookDamaged: 325,
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
            BookDamaged: 325,
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
            BookDamaged: 325,
        }]
    public getStudentReport() {
        return this.studentReport;
    }

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
                SpamCount: 33
            },
            commentHeader: "افتضاح",
            commentBody: "کتاب بشدت مزخرفی بود",
            createdDate: "1401/01/21",
            childComment: [
                {
                    CommentID: 2,
                    student: {
                        studentID: 27,
                        studentName: "محمدرضا محمدرضایی نژاد محمدشهر",
                        studentSSID: "0548584",
                        studentUniversityID: "981523650",
                        createdDate: "1500/13/22",
                        updateDate: "1501/08/09",
                        IsBlocked: true,
                        IsSuspended: true,
                        IsSpam: false,
                        SpamCount: 0
                    },
                    commentHeader: "مودب باش بیشعور",
                    createdDate: "1401/01/21"
                }
            ]
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
                SpamCount: 10
            },
            commentHeader: "باید ریخت سطل آشغال",
            createdDate: "1401/01/22"
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
                SpamCount: 1205
            },
            commentHeader: "نویسنده اش احمقه",
            createdDate: "1501/01/22",
            childComment: [
                {
                    CommentID: 5,
                    student: {
                        studentID: 26,
                        studentName: "اشکان اشکانیان",
                        studentSSID: "351354353",
                        studentUniversityID: "5666576",
                        createdDate: "1400/13/73",
                        updateDate: "1502/19/99",
                        IsBlocked: false,
                        IsSuspended: true,
                        IsSpam: true,
                        SpamCount: 1
                    },
                    commentHeader: "احمق تویی",
                    createdDate: "1501/01/23",
                    childComment: [
                        {
                            CommentID: 6,
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
                                SpamCount: 1205
                            },
                            commentHeader: "%$@^%$^&$^%^ &%$^%(*&()*&",
                            createdDate: "1501/01/22"
                        }
                    ]
                },
                {
                    CommentID: 7,
                    student: {
                        studentID: 23,
                        studentName: "شیرین شیرین زاده",
                        studentSSID: "008565987",
                        studentUniversityID: "9715081050",
                        createdDate: "1501/13/73",
                        updateDate: "1502/19/99",
                        IsBlocked: false,
                        IsSuspended: false,
                        IsSpam: false,
                        SpamCount: 0
                    },
                    commentHeader: "گمشو",
                    createdDate: "1501/01/23",
                }
            ]
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
                SpamCount: 10
            },
            commentHeader: "&^%&% *^*^*&)^ )*&*)",
            createdDate: "1401/01/22",
            childComment: [
                {
                    CommentID: 9,
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
                        SpamCount: 1205
                    },
                    commentHeader: "مزاحم نشو",
                    createdDate: "1401/01/22"
                }
            ]
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
                SpamCount: 10
            },
            commentHeader: "09121212112 *@#% $%@$#@$% ",
            createdDate: "1401/01/22"
        }
    ]
}