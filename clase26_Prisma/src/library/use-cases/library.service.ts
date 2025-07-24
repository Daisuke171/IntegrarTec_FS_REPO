import { Injectable } from '@nestjs/common';
import { LibraryRepository } from '../domain/repositories/library.repository';
import { Book } from '../domain/entities/library.entity';

@Injectable()
export class LibraryService {
  constructor(private readonly libraryRepository: LibraryRepository) {}

  findAll() {
    return this.libraryRepository.findAll();
  }

  findOne(id: string) {
    return this.libraryRepository.findOne(id);
  }

  create(data: Omit<Book, 'id'>) {
    return this.libraryRepository.create(
      new Book({
        title: data.title,
        author: data.author,
        pages: data.pages,
        language: data.language,
        year: data.year,
        genre: data.genre,
        isbn: data.isbn,
        country: data.country,
      }),
    );
  }

  update(id: string, data: Partial<Book>) {
    return this.libraryRepository.update(id, data);
  }

  delete(id: string) {
    return this.libraryRepository.delete(id);
  }
}
