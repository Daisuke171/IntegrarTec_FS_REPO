import { UsersRepository } from 'src/users/domain/repositories/users.repository';
import { User } from 'src/users/domain/entities/users.entity';
export declare class UsersPrismaRepository implements UsersRepository {
    private prisma;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    create(user: User): Promise<User>;
    update(id: string, data: Partial<User>): Promise<User | null>;
    delete(id: string): Promise<boolean>;
}
