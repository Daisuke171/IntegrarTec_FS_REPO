import { LoansService } from '../use-cases/loans.service';
import { Loan } from '../domain/entities/loans.entity';
export declare class LoansController {
    private readonly loanService;
    constructor(loanService: LoansService);
    findAll(): Promise<Loan[]>;
    findOne(id: string): Promise<Loan | null>;
    findByUser(userId: string): Promise<Loan[]>;
    create(data: Omit<Loan, 'id'>): Promise<Loan>;
    update(id: string, data: Partial<Loan>): Promise<Loan | null>;
    delete(id: string): Promise<boolean>;
}
