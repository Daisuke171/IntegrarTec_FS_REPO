import { Book } from '../entities/library.entity';

export abstract class LibraryRepository {
  abstract findAll(): Promise<Book[]>;
  abstract findOne(id: string): Promise<Book | null>;
  abstract create(book: Omit<Book, 'id'>): Promise<Book>;
  abstract update(id: string, data: Partial<Book>): Promise<Book | null>;
  abstract delete(id: string): Promise<boolean>;
}
