export interface IStudent {

    studentID: number,
    studentName: String,
    studentSSID: string,
    studentUnivercityID: String,
    createdDate: string,
    updateDate: string,
    IsDeleted?: boolean,
    AdminID?: number,
    userID?: number,
    IsSpam?: boolean,
    SpamCount?: number,
    ReportPoint?: number,
    historyID?: number
    TableName?: string,
    ColumnName?: string,
    TableID?: number
    HistoryDate?: string

}