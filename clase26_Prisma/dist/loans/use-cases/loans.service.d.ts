import { LoansRepository } from '../domain/repositories/loans.repository';
import { Loan } from '../domain/entities/loans.entity';
export declare class LoansService {
    private readonly loanRepository;
    constructor(loanRepository: LoansRepository);
    findAll(): Promise<Loan[]>;
    findOne(id: string): Promise<Loan | null>;
    create(data: Omit<Loan, 'id'>): Promise<Loan>;
    update(id: string, data: Partial<Loan>): Promise<Loan | null>;
    delete(id: string): Promise<boolean>;
    findByUser(userId: string): Promise<Loan[]>;
}
