import { LibraryRepository } from '../domain/repositories/library.repository';
import { Book } from '../domain/entities/library.entity';
export declare class LibraryService {
    private readonly libraryRepository;
    constructor(libraryRepository: LibraryRepository);
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book | null>;
    create(data: Omit<Book, 'id'>): Promise<Book>;
    update(id: string, data: Partial<Book>): Promise<Book | null>;
    delete(id: string): Promise<boolean>;
}
