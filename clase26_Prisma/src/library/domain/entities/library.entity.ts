export class Book {
  public id?: string;
  public title: string;
  public author: string;
  public pages: number;
  public language: string;
  public year: number;
  public genre: string;
  public isbn: string;
  public country: string;

  constructor({
    id,
    title,
    author,
    pages,
    language,
    year,
    genre,
    isbn,
    country,
  }: {
    id?: string;
    title: string;
    author: string;
    pages: number;
    language: string;
    year: number;
    genre: string;
    isbn: string;
    country: string;
  }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.year = year;
    this.genre = genre;
    this.isbn = isbn;
    this.country = country;
  }
}

export class User {
  public id?: string;
  public name: string;
  public email: string;

  constructor({
    id,
    name,
    email,
  }: {
    id?: string;
    name: string;
    email: string;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

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
