import { IBook } from "./IBook"
import { IStudent } from "./IStudent";

export interface IRequestH {
    requestID: number,
    studentID: number,
    adminID: number,
    requestAcceptDate: string,
    isAccepted: boolean,
    requestFinishedDate: string,
    isDelayed: boolean,
    requestDescription: string,
    createdDate: string,
    isDeleted: boolean,
    delayTime: number
}


export interface IRequestD {
    requestHID: number,
    requestDID: number,
    bookID: number,
    description: string,
    isDamaged: boolean,
    isLost: boolean
}

export interface IRequestDetailViewModel {
    requestDetailID: Number,
    requestHeaderID: number,
    bookID: number,
    books:IBook,
    requestDetailDescription: string,
    isDamaged: Boolean,
    isLost: Boolean
}

export interface IRequestViewModel {
    requestID: number,
    studentID:number,
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