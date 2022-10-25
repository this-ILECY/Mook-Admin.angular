import { IRequestH, IRequestD } from "./IRequestH";

export interface IStudent {

    studentID: number,
    studentName: String,
    studentSSID: string,
    studentUniversityID: String,
    createdDate: string,
    updateDate: string,
    adminID?: number,
    userID?: number,
    spamCount?: number,
    isBlocked?: boolean,
    isDeleted?: boolean,
    isSuspended?: boolean,
    isSpam?: boolean,
    reportPoint?: number,
    isRegistered?: boolean
}

export interface IStudentReport {
    studentID:number,
    studentName: string,
    studentSSID: string,
    studentUniversityID: string,
    requestCount: number,
    requsetDelayCount: number,
    bookRent: number,
    bookDamaged: number,
    bookLost?: number
    createdDate: string
}
