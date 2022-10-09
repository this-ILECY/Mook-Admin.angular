import { IBook } from "./IBook"
import { IStudent } from "./IStudent"

export interface IComment{
    commentID:number
    students:IStudent
    commentHeader:string
    commentContent?:string
    IsAdminAccepted?:Boolean
    createdDate:string
    bookID?:number
}