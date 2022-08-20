import { IRequestH, IRequestD } from "./IRequestH";

export interface IStudent {

    studentID: number,
    studentName: String,
    studentSSID: string,
    studentUniversityID: String,
    createdDate: string,
    updateDate: string,
    IsDeleted?: boolean,
    AdminID?: number,
    userID?: number,
    IsBlocked?:boolean,
    IsSuspended?:boolean,
    IsSpam?: boolean,
    SpamCount?: number,
    ReportPoint?: number
}

export interface IStudentReport{
    studentID:number,
    studentName:string,
    studentSSID:string,
    studentUniversityID:string
    RequestCount:number,
    RequsetDelayCount:number,
    LongestDelay:string,
    BookRent:number,
    BookDamaged:number,
    BookLost?:number
    registerDate:string
}