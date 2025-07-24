import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../domain/repositories/users.repository';
import { User } from '../domain/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  create(data: Omit<User, 'id'>) {
    return this.usersRepository.create(
      new User({
        name: data.name,
        email: data.email,
      }),
    );
  }

  update(id: string, data: Partial<User>) {
    return this.usersRepository.update(id, data);
  }

  delete(id: string) {
    return this.usersRepository.delete(id);
  }
}
