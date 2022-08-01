export interface IStudent {

    studentID: number,
    studentName: String,
    studentSSID: string,
    studentUniversityID: String,
    createdDate: string,
    updateDate: string,
    IsDeleted?: boolean,
    AdminID?: number,
    userID?: number,
    IsSpam?: boolean,
    SpamCount?: number,
    ReportPoint?: number,
}