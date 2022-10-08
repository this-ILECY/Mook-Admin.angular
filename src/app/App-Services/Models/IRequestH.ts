import { IBook } from "./IBook"
import { IStudent } from "./IStudent";

export interface IRequestH {
    RequestID: number,
    studentID: number,
    AdminID: number,
    requestAcceptDate: string,
    isAccepted: boolean,
    RequestFinishedDate: string,
    isDelayed: boolean,
    RequestDescription: string,
    createdDate: string,
    IsDeleted: boolean,
    delayTime: number
}


export interface IRequestD {
    RequestHID: number,
    RequestDID: number,
    BookID: number,
    description: string,
    IsDamaged: boolean,
    IsLost: boolean
}

export interface IRequestDetailViewModel {
    RequestDetailID: Number,
    RequestHeaderID: number,
    BookID: number,
    RequestDetailDescription: string,
    IsDamaged: Boolean,
    IsLost: Boolean
}

export interface IRequestViewModel {
    RequestID: number,
    RequestAcceptedDate: string,
    isAccepted: Boolean,
    RequestFinishedDate: string,
    isDelayed: Boolean,
    DelayDays: number,
    RequestDecription: string,
    createdDate: string,
    IsDeleted: Boolean,
    requestDetail: IRequestDetailViewModel[],
    students: IStudent
}