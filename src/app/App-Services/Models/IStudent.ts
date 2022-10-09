import { IRequestH, IRequestD } from "./IRequestH";

export interface IStudent {

    studentID: number,
    studentName: String,
    studentSID: string,
    studentUniversityID: String,
    createdDate: string,
    updateDate: string,
    isDeleted?: boolean,
    adminID?: number,
    userID?: number,
    isBlocked?:boolean,
    isSuspended?:boolean,
    isSpam?: boolean,
    spamCount?: number,
    reportPoint?: number,
    isRegistered?:boolean
}

export interface IStudentReport{
    students:IStudent
    requestCount:number,
    requsetDelayCount:number,
    longestDelay:string,
    bookRent:number,
    bookDamaged:number,
    bookLost?:number
    registerDate:string
}
