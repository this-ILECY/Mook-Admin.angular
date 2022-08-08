export interface IPublisher {
    PublisherID: number,
    PublisherName: string,
    PublisherPhone?: string,
    publisherAddress?: string,
    CreatedDate: string,
    UpdateDate?: string,
    IsDeleted: boolean,
    AdminID?: number
}