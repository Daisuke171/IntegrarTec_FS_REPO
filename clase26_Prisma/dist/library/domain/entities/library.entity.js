"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = exports.User = exports.Book = void 0;
class Book {
    id;
    title;
    author;
    pages;
    language;
    year;
    genre;
    isbn;
    country;
    constructor({ id, title, author, pages, language, year, genre, isbn, country, }) {
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
exports.Book = Book;
class User {
    id;
    name;
    email;
    constructor({ id, name, email, }) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
exports.User = User;
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
//# sourceMappingURL=library.entity.js.map