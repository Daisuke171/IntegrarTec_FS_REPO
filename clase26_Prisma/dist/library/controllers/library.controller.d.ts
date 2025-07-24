import { LibraryService } from '../use-cases/library.service';
import { Book } from '../domain/entities/library.entity';
export declare class LibraryController {
    private readonly libraryService;
    constructor(libraryService: LibraryService);
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book | null>;
    create(data: Omit<Book, 'id'>): Promise<Book>;
    update(id: string, data: Partial<Book>): Promise<Book | null>;
    delete(id: string): Promise<boolean>;
}
