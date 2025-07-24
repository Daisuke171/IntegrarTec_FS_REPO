import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [LibraryModule, UsersModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
