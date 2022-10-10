import { IBook } from "./IBook"
import { IStudent } from "./IStudent";

export interface IRequestH {
    requestID: number,
    studentID: number,
    AdminID: number,
    requestAcceptDate: string,
    isAccepted: boolean,
    requestFinishedDate: string,
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
    requestID: number,
    requestAcceptedDate: string,
    isAccepted: Boolean,
    requestFinishedDate: string,
    isDelayed: Boolean,
    delayDays: number,
    requestDecription: string,
    createdDate: string,
    isDeleted: Boolean,
    requestDetails: IRequestDetailViewModel[],
    students: IStudent
}