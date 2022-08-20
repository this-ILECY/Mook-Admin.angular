import { IBook } from "./IBook"
import { IStudent } from "./IStudent"

export interface IComment{
    CommentID:number
    student:IStudent
    commentHeader:string
    commentBody?:string
    createdDate:string
    bookID?:number
}