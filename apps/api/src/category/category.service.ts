import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  BadRequestException,
  HttpException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    try {
      const categories = await this.prisma.category.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      return categories;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error fetching categories');
      }
      throw new InternalServerErrorException('Error fetching categories');
    }
  }

  async findOneName(name: string) {
    try {
      const category = await this.prisma.category.findFirst({
        where: {
          name,
        },
      });
      if (!category) {
        throw new NotFoundException('Category not found');
      }
      return category;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error fetching category');
      }
      throw new InternalServerErrorException('Error fetching category');
    }
  }

  async findById(id: string) {
    try {
      const category = await this.prisma.category.findFirst({
        where: {
          id,
        },
      });
      if (!category) {
        throw new NotFoundException('Category not found');
      }
      return category;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error fetching category');
      }
      throw new InternalServerErrorException('Error fetching category');
    }
  }
  async create(name: string) {
    try {
      const category = await this.prisma.category.findFirst({
        where: {
          name,
        },
      });
      if (category) {
        throw new BadRequestException('Category already exists');
      }
      return await this.prisma.category.create({
        data: {
          name,
        },
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error creating category');
      }
      throw new InternalServerErrorException('Error creating category');
    }
  }
  async delete(id: string) {
    try {
      await this.prisma.category.delete({
        where: {
          id,
        },
      });
      return {
        message: 'Category deleted successfully',
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Category not found');
      }
      throw error;
    }
  }
  async update(id: string, newName: string) {
    try {
      return await this.prisma.category.update({
        where: {
          id,
        },
        data: {
          name: newName,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Category not found');
      }
      throw error;
    }
  }
}
