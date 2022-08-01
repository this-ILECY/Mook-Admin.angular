import { Injectable } from '@angular/core';
import { IAdmin } from './Models/IAdmin';
import { IBook } from './Models/IBook';
import { IRequestD } from './Models/IRequestD';
import { IRequestH, IRequestViewModel } from './Models/IRequestH';
import { IStudent } from './Models/IStudent';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }


    private Book: IBook[] = [
        {
            bookID: 1,
            bookName: "book1",
            bookPagesCount: 320,
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
            bookName: "book2",
            bookPagesCount: 320,
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
            bookName: "book3",
            bookPagesCount: 320,
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
            bookName: "book4",
            bookPagesCount: 320,
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
            bookName: "book5",
            bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID:6,
            bookName: "book6",
            bookPagesCount: 320,
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
            bookName: "book7",
            bookPagesCount: 320,
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
            bookName: "book8",
            bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        },
        {
            bookID:9,
            bookName: "book9",
            bookPagesCount: 320,
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
            bookName: "book10",
            bookPagesCount: 320,
            bookRating: 3.2,
            BookratingCount: 56,
            bookDescription: "a book",
            createdDate: '1401/05/06',
            UpdateDate: '1401/06/17',
            IsDeleted: false,
            AdminID: 1
        }
    ]

    public getBook(){
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
    },
    {
        studentID: 22,
        studentName: "مسعود مسعودی",
        studentSSID: "007585950",
        studentUniversityID: "971456213",
        createdDate: "1500/13/22",
        updateDate: "1501/08/09",
    },
    {
        studentID: 23,
        studentName: "شیرین شیرین زاده",
        studentSSID: "008565987",
        studentUniversityID: "9715081050",
        createdDate: "1501/13/73",
        updateDate: "1502/19/99",
    },
    {
        studentID: 24,
        studentName: "رضا رضایی",
        studentSSID: "002154515",
        studentUniversityID: "351564332",
        createdDate: "1000/00/02",
        updateDate: "1401/00/31",
    },
    {
        studentID: 25,
        studentName: "سارا سارایی",
        studentSSID: "015455315",
        studentUniversityID: "68743563",
        createdDate: "1650/13/73",
        updateDate: "1600/19/99",
    },
    {
        studentID: 26,
        studentName: "اشکان اشکانیان",
        studentSSID: "351354353",
        studentUniversityID: "5666576",
        createdDate: "1400/13/73",
        updateDate: "1502/19/99",
    }]
    public getStudent() {
        return this.Student;
    }


    private Request: IRequestViewModel[] = [
        {
            RequestH: {
                RequestID: 1,
                studentID: 21,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book2",
                        bookPagesCount: 320,
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
                        bookName: "book3",
                        bookPagesCount: 320,
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
                        bookName: "book4",
                        bookPagesCount: 320,
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
                        bookName: "book5",
                        bookPagesCount: 320,
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
            }, 
           
        },
        {
            RequestH: {
                RequestID: 2,
                studentID: 22,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book9",
                        bookPagesCount: 320,
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
                        bookName: "book10",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 3,
                studentID: 23,
                AdminID: 1,
                createdDate: '1401/08/09'
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 4,
                studentID: 24,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        },
        {
            RequestH: {
                RequestID: 5,
                studentID: 25,
                AdminID: 1,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
                        bookName: "book1",
                        bookPagesCount: 320,
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
            }
        }
    ]

    public getRequest() {
        return this.Request;
    }

}