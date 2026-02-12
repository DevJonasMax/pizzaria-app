import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { UpdateUserDto } from './dtos/update.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    try {
      const users = await this.prisma.users.findMany({
        omit: {
          password: true,
        },
      });
      return users;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException('Users not found');
    }
  }
  async findOne(id: string) {
    return await Promise.resolve(`This action returns a #${id} user`);
  }

  async remove(id: string) {
    try {
      const user = await this.prisma.users.findUnique({
        where: {
          id,
        },
      });
      if (!user) {
        throw new NotFoundException(`User not found`);
      }
      await this.prisma.users.delete({
        where: {
          id,
        },
      });
      return {
        message: `User deleted successfully`,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`User not found`);
      }
      throw new InternalServerErrorException('Error deleting user');
    }
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.users.update({
        where: {
          id,
        },
        data: updateUserDto,
      });
      if (!user) {
        throw new NotFoundException(`User not found`);
      }
      return user;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`User not found`);
      }
      throw new InternalServerErrorException('Error updating user');
    }
  }
}
