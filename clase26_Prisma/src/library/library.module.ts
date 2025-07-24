import { Module } from '@nestjs/common';
import { LibraryController } from './controllers/library.controller';
import { LibraryService } from './use-cases/library.service';
import { LibraryRepository } from './domain/repositories/library.repository';
import { LibraryJsonRepository } from './infrastructure/json/library-json.repository';
import { LibraryPrismaRepository } from './infrastructure/prisma/library-prisma.repository';

@Module({
  controllers: [LibraryController],
  providers: [
    LibraryService,
    {
      provide: LibraryRepository,
      useClass: LibraryPrismaRepository,
    },
  ],
})
export class LibraryModule {}
