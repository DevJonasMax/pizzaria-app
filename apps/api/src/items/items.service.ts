import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dtos/createItems.dto';
import { PrismaService } from '../prisma/prisma.service';
import {
  NotFoundException,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { UpdateItemDto } from './dtos/updateItems.dto';
@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    try {
      const items = await this.prismaService.items.findMany();
      return items;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching items');
    }
  }

  async findOne(id: string) {
    try {
      const item = await this.prismaService.items.findUnique({
        where: {
          id,
        },
      });
      if (!item) {
        throw new NotFoundException(`Item not found`);
      }
      return item;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Item not found`);
      }
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching item');
    }
  }

  async create(createItemDto: CreateItemDto) {
    const orderExists = await this.prismaService.orders.findUnique({
      where: {
        id: createItemDto.orderId,
      },
    });
    if (!orderExists) {
      throw new NotFoundException(`Order #${createItemDto.orderId} not found`);
    }
    const productExists = await this.prismaService.products.findUnique({
      where: {
        id: createItemDto.productId,
      },
    });
    if (!productExists) {
      throw new NotFoundException(
        `Product #${createItemDto.productId} not found`,
      );
    }
    const newItem = await this.prismaService.items.create({
      data: createItemDto,
    });
    return newItem;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    try {
      const item = await this.prismaService.items.findUnique({
        where: {
          id,
        },
      });
      if (!item) {
        throw new NotFoundException(`Item #${id} not found`);
      }
      const updatedItem = await this.prismaService.items.update({
        where: {
          id,
        },
        data: updateItemDto,
      });
      return updatedItem;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating item');
    }
  }
  async remove(id: string) {
    try {
      const item = await this.prismaService.items.findUnique({
        where: {
          id,
        },
      });
      if (!item) {
        throw new NotFoundException(`Item #${id} not found`);
      }
      await this.prismaService.items.delete({
        where: {
          id,
        },
      });
      return {
        message: `Item deleted successfully`,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error deleting item');
    }
  }
}
