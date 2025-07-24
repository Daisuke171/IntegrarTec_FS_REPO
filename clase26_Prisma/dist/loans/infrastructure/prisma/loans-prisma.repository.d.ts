import { LoansRepository } from 'src/loans/domain/repositories/loans.repository';
import { Loan } from 'src/loans/domain/entities/loans.entity';
export declare class LoansPrismaRepository implements LoansRepository {
    private prisma;
    findAll(): Promise<Loan[]>;
    findOne(id: string): Promise<Loan | null>;
    create(loan: Loan): Promise<Loan>;
    update(id: string, data: Partial<Loan>): Promise<Loan | null>;
    delete(id: string): Promise<boolean>;
    findByUser(userId: string): Promise<Loan[]>;
}
