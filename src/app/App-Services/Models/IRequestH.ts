import { IBook } from "./IBook"
import { IStudent } from "./IStudent";

export interface IRequestH {
    RequestID: number,
    studentID: number,
    AdminID: number,
    requestAcceptDate?: string,
    IsAccepted?: boolean,
    RequestFinishedDate?: string,
    IsDelayed?: boolean,
    RequestDescription?: string,
    createdDate: string,
    IsDeleted?: boolean,
}


export interface IRequestD{
    RequestHID:number,
    RequestDID:number,
    BookID:number,
    description:string,
    IsDamaged:boolean,
    IsLost:boolean
}

export interface IRequestDetailViewModel{
    RequestHID:number,
    RequestDID:number,
    BookID:number,
    description:string,
    IsDamaged:boolean,
    IsLost:boolean,
    book:IBook
}

export interface IRequestViewModel{
    RequestH?:IRequestH,
    requestDetail?:IRequestDetailViewModel[],
    student?:IStudent
}