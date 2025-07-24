import { UsersRepository } from '../domain/repositories/users.repository';
import { User } from '../domain/entities/users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    create(data: Omit<User, 'id'>): Promise<User>;
    update(id: string, data: Partial<User>): Promise<User | null>;
    delete(id: string): Promise<boolean>;
}
