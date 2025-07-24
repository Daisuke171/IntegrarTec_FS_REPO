import { User } from '../entities/users.entity';
export declare abstract class UsersRepository {
    abstract findAll(): Promise<User[]>;
    abstract findOne(id: string): Promise<User | null>;
    abstract create(book: Omit<User, 'id'>): Promise<User>;
    abstract update(id: string, data: Partial<User>): Promise<User | null>;
    abstract delete(id: string): Promise<boolean>;
}
