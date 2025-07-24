import { Book } from '../domain/entities/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): any;
    findOne(id: string): any;
    create(data: Omit<Book, 'id'>): any;
    update(id: string, data: Partial<Book>): any;
    delete(id: string): any;
}
