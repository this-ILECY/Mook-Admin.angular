import { Injectable } from '@angular/core';
import { IAdmin } from './Models/IAdmin';
import { IStudent } from './Models/IStudent';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

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
        studentName: "علی",
        studentSSID: "002585258",
        studentUnivercityID: "00452365",
        createdDate: "1500/13/65",
        updateDate: "1501/15/23",
    },
    {
        studentID: 22,
        studentName: "مسعود",
        studentSSID: "007585950",
        studentUnivercityID: "971456213",
        createdDate: "1500/13/22",
        updateDate: "1501/08/09",
    },
    {
        studentID: 23,
        studentName: "شیرین",
        studentSSID: "008565987",
        studentUnivercityID: "9715081050",
        createdDate: "1501/13/73",
        updateDate: "1502/19/99",
    },
    {
        studentID: 24,
        studentName: "رضا",
        studentSSID: "002154515",
        studentUnivercityID: "351564332",
        createdDate: "1000/00/02",
        updateDate: "1401/00/31",
    },
    {
        studentID: 25,
        studentName: "سارا",
        studentSSID: "015455315",
        studentUnivercityID: "68743563",
        createdDate: "1650/13/73",
        updateDate: "1600/19/99",
    },
    {
        studentID: 26,
        studentName: "اشکان",
        studentSSID: "351354353",
        studentUnivercityID: "5666576",
        createdDate: "1400/13/73",
        updateDate: "1502/19/99",
    }]
    public getStudent(){
        return this.Student;
    }


}