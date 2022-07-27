export interface IAdmin {
    AdminID: number,
    AdminName: string,
    AdminPhone: string,
    createdDate: string,
    updateDate: string,
    IsDeleted: boolean,
    historyID?: number
    TableName?: string,
    ColumnName?: string,
    TableID?: number
    HistoryDate?: string
}