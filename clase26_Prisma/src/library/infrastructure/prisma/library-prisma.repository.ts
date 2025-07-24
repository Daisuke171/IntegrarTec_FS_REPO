import { Injectable } from '@nestjs/common';
import { LibraryRepository } from 'src/library/domain/repositories/library.repository';
import { Book } from 'src/library/domain/entities/library.entity';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class LibraryPrismaRepository implements LibraryRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async findOne(id: string): Promise<Book | null> {
    return await this.prisma.book.findUnique({ where: { id } });
  }

  async create(book: Book): Promise<Book> {
    return await this.prisma.book.create({ data: book });
  }

  async update(id: string, data: Partial<Book>): Promise<Book | null> {
    return await this.prisma.book.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    const book = await this.findOne(id);
    if (!book) return false;
    await this.prisma.book.delete({ where: { id } });
    return true;
  }
}
