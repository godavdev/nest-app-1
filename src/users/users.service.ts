import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dtos';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async getUserById(id: number): Promise<User | undefined> {
    const foundUser = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    return foundUser ?? undefined;
  }

  async createUser(dto: UserDto): Promise<User> {
    const createUser = await this.prismaService.user.create({
      data: dto,
    });

    return createUser;
  }

  async updateUser(id: number, dto: UserDto): Promise<User | undefined> {
    try {
      const updatedUser = await this.prismaService.user.update({
        where: {
          id,
        },
        data: dto,
      });
      return updatedUser;
    } catch (error) {
      console.log('Error updating user:', error);
      return undefined;
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      const deletedUser = await this.prismaService.user.delete({
        where: { id },
      });
      return !!deletedUser;
    } catch {
      return false;
    }
  }
}
