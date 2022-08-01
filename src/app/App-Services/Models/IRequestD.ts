import { IBook } from "./IBook"

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