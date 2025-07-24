import { UsersRepository } from '../../domain/repositories/users.repository';
import { User } from '../../domain/entities/users.entity';
export declare class UsersPrismaRepository implements UsersRepository {
    private prisma;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    create(book: User): Promise<User>;
    update(id: string, data: Partial<User>): Promise<User | null>;
    delete(id: string): Promise<boolean>;
}
