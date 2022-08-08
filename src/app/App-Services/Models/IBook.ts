export interface IBook{
    bookID:number,
    PubID?:number,
    PubName:string,
    bookName:string,
    bookPagesCount:number,
    bookRating:number,
    BookratingCount:number,
    bookDescription:string,
    createdDate:string,
    UpdateDate:string,
    IsDeleted:boolean,
    AdminID:number
}