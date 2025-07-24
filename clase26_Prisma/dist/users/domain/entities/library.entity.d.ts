export declare class Book {
    id?: string;
    title: string;
    author: string;
    pages: number;
    language: string;
    year: number;
    genre: string;
    isbn: string;
    country: string;
    constructor({ id, title, author, pages, language, year, genre, isbn, country, }: {
        id?: string;
        title: string;
        author: string;
        pages: number;
        language: string;
        year: number;
        genre: string;
        isbn: string;
        country: string;
    });
}
export declare class User {
    id?: string;
    name: string;
    email: string;
    constructor({ id, name, email, }: {
        id?: string;
        name: string;
        email: string;
    });
}
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
