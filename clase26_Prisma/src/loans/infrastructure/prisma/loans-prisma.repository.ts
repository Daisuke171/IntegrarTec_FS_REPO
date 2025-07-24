import { Injectable } from '@nestjs/common';
import { LoansRepository } from 'src/loans/domain/repositories/loans.repository';
import { Loan } from 'src/loans/domain/entities/loans.entity';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class LoansPrismaRepository implements LoansRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<Loan[]> {
    return this.prisma.loan.findMany();
  }

  async findOne(id: string): Promise<Loan | null> {
    return await this.prisma.loan.findUnique({ where: { id } });
  }

  async create(loan: Loan): Promise<Loan> {
    return await this.prisma.loan.create({
      data: {
        ...loan,
        returnDate: loan.returnDate ?? new Date(1970, 0, 1),
      },
    });
  }

  async update(id: string, data: Partial<Loan>): Promise<Loan | null> {
    return await this.prisma.loan.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    const loan = await this.findOne(id);
    if (!loan) return false;
    await this.prisma.book.delete({ where: { id } });
    return true;
  }

  async findByUser(userId: string): Promise<Loan[]> {
    return this.prisma.loan.findMany({
      where: { userId },
    });
  }
}
