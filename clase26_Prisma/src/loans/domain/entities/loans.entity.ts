export class Loan {
  public id?: string;
  public bookId: string;
  public userId: string;
  public loanDate: Date;
  public returnDate?: Date;

  constructor({
    id,
    bookId,
    userId,
    loanDate,
    returnDate,
  }: {
    id?: string;
    bookId: string;
    userId: string;
    loanDate: Date;
    returnDate?: Date;
  }) {
    this.id = id;
    this.bookId = bookId;
    this.userId = userId;
    this.loanDate = loanDate;
    this.returnDate = returnDate;
  }
}
