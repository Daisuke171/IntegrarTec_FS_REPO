import { LibraryRepository } from 'src/library/domain/repositories/library.repository';
import { Book } from 'src/library/domain/entities/library.entity';
import { readData, writeData } from 'src/shared/utils/file.utils';
import { Injectable } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class LibraryJsonRepository implements LibraryRepository {
  private readonly filePath = 'data/books.json';

  async findAll(): Promise<Book[]> {
    return await readData(this.filePath);
  }

  async findOne(id: string): Promise<Book | null> {
    const books = await this.findAll();
    return books.find((book) => book.id === id) || null;
  }

  async create(book: Book): Promise<Book> {
    const books = await this.findAll();
    const newBook = { ...book, id: uuid4() };
    books.push(newBook);
    await writeData(this.filePath, books);
    return newBook;
  }

  async update(id: string, data: Partial<Book>): Promise<Book | null> {
    const books = await this.findAll();
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return null;

    const updatedBook = { ...books[index], ...data };
    books[index] = updatedBook;
    await writeData(this.filePath, books);
    return updatedBook;
  }

  async delete(id: string): Promise<boolean> {
    let books = await this.findAll();
    const initialLength = books.length;
    books = books.filter((book) => book.id !== id);
    await writeData(this.filePath, books);
    return initialLength !== books.length;
  }
}
