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
    AdminID:number,
    Author?:string
    IsAvailable?:boolean
}

export interface IbookToBuy{
     bookToBuyId: number
     studentId : number
     bookName : string
     bookAuthor : string
     bookPublisher : string
}