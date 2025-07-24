import { LibraryRepository } from 'src/library/domain/repositories/library.repository';
import { Book } from 'src/library/domain/entities/library.entity';
export declare class LibraryJsonRepository implements LibraryRepository {
    private readonly filePath;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book | null>;
    create(book: Book): Promise<Book>;
    update(id: string, data: Partial<Book>): Promise<Book | null>;
    delete(id: string): Promise<boolean>;
}
