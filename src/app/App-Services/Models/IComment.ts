import { IBook } from "./IBook"
import { IStudent } from "./IStudent"

export interface IComment{
    CommentID:number
    student:IStudent
    commentHeader:string
    commentContent?:string
    IsAdminAccepted?:Boolean
    createdDate:string
    bookID?:number
}