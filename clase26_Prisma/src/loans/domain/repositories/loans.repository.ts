import { Loan } from '../entities/loans.entity';

export abstract class LoansRepository {
  abstract findAll(): Promise<Loan[]>;
  abstract findOne(id: string): Promise<Loan | null>;
  abstract create(loan: Omit<Loan, 'id'>): Promise<Loan>;
  abstract update(id: string, data: Partial<Loan>): Promise<Loan | null>;
  abstract delete(id: string): Promise<boolean>;
  abstract findByUser(userId: string): Promise<Loan[]>;
}
