export declare class Loan {
    id?: string;
    bookId: string;
    userId: string;
    loanDate: Date;
    returnDate?: Date;
    constructor({ id, bookId, userId, loanDate, returnDate, }: {
        id?: string;
        bookId: string;
        userId: string;
        loanDate: Date;
        returnDate?: Date;
    });
}
