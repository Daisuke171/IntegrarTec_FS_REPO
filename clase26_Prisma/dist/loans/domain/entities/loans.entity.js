"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
class Loan {
    id;
    bookId;
    userId;
    loanDate;
    returnDate;
    constructor({ id, bookId, userId, loanDate, returnDate, }) {
        this.id = id;
        this.bookId = bookId;
        this.userId = userId;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
    }
}
exports.Loan = Loan;
//# sourceMappingURL=loans.entity.js.map