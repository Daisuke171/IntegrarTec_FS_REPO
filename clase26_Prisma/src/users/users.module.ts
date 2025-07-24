import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './use-cases/users.service';
import { UsersRepository } from './domain/repositories/users.repository';
import { UsersPrismaRepository } from './infrastructure/prisma/users-prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
})
export class UsersModule {}
