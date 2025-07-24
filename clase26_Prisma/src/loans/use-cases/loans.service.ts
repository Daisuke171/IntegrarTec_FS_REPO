import { Injectable } from '@nestjs/common';
import { LoansRepository } from '../domain/repositories/loans.repository';
import { Loan } from '../domain/entities/loans.entity';

@Injectable()
export class LoansService {
  constructor(private readonly loanRepository: LoansRepository) {}

  findAll() {
    return this.loanRepository.findAll();
  }

  findOne(id: string) {
    return this.loanRepository.findOne(id);
  }

  create(data: Omit<Loan, 'id'>) {
    return this.loanRepository.create(
      new Loan({
        bookId: data.bookId,
        userId: data.userId,
        loanDate: data.loanDate,
        returnDate: data.returnDate,
      }),
    );
  }

  update(id: string, data: Partial<Loan>) {
    return this.loanRepository.update(id, data);
  }

  delete(id: string) {
    return this.loanRepository.delete(id);
  }

  findByUser(userId: string): Promise<Loan[]> {
    return this.loanRepository.findByUser(userId);
  }
}
