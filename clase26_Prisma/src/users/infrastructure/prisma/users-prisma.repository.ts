import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/domain/repositories/users.repository';
import { User } from 'src/users/domain/entities/users.entity';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async create(user: User): Promise<User> {
    return await this.prisma.user.create({ data: user });
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.findOne(id);
    if (!user) return false;
    await this.prisma.user.delete({ where: { id } });
    return true;
  }
}
