import { User } from '../../domain/entities/users.entity';
export declare abstract class UsersRepository {
    abstract findAll(): Promise<User[]>;
    abstract findOne(id: string): Promise<User | null>;
    abstract create(user: Omit<User, 'id'>): Promise<User>;
    abstract update(id: string, data: Partial<User>): Promise<User | null>;
    abstract delete(id: string): Promise<boolean>;
}
