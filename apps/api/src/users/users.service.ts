import { Injectable, NotFoundException } from '@nestjs/common';

import { UpdateUserDto } from './dtos/update.dto';
import { PrismaService } from '../prisma/prisma.service';

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
    return await Promise.resolve(`This action removes a #${id} user`);
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await Promise.resolve(
      `This action updates a #${id} user ${JSON.stringify(updateUserDto)}`,
    );
  }
}
