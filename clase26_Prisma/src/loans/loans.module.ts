import { Module } from '@nestjs/common';
import { LoansController } from './controller/loans.controller';
import { LoansService } from './use-cases/loans.service';
import { LoansRepository } from './domain/repositories/loans.repository';
import { LoansPrismaRepository } from './infrastructure/prisma/loans-prisma.repository';

@Module({
  controllers: [LoansController],
  providers: [
    LoansService,
    {
      provide: LoansRepository,
      useClass: LoansPrismaRepository,
    },
  ],
})
export class LoansModule {}
