import { IRequestD, IRequestDetailViewModel } from "./IRequestD";
import { IStudent } from "./IStudent";

export interface IRequestH {
    RequestID: number,
    studentID: number,
    AdminID: number,
    requestAccepDate?: string,
    IsAccepted?: boolean,
    RequestFinishedDate?: string,
    IsDelayed?: boolean,
    RequestDescription?: string,
    createdDate: string,
    IsDeleted?: boolean,
}

export interface IRequestViewModel{
    RequestH:IRequestH,
    requestDetail:IRequestDetailViewModel[],
    student:IStudent
}