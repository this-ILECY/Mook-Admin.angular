export interface IBook{
    bookID:number,
    bookName:string,
    bookratingCount:number,
    bookRating:number,
    publisher:string,
    author:string
    bookPagesCount:number,
    bookDescription:string,
    createdDate:string,
    updateDate:string,
    isDeleted:boolean,
    isDamaged:boolean,
    isAvailable?:boolean
    adminID:number,
}

export interface IbookToBuy{
     bookToBuyId: number
     studentId : number
     bookName : string
     bookAuthor : string
     bookPublisher : string
}