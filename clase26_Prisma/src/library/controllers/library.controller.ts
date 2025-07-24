import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { LibraryService } from '../use-cases/library.service';
import { Book } from '../domain/entities/library.entity';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryService.findOne(id);
  }

  @Post()
  create(@Body() data: Omit<Book, 'id'>) {
    return this.libraryService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Book>) {
    return this.libraryService.update(id, data);
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return this.libraryService.delete(id);
  }
}
