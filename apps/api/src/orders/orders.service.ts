import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './Dtos/create.dto';
import { UpdateOrderDto } from './Dtos/update.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(draft?: string | boolean) {
    const isDraft = draft === undefined ? undefined : String(draft) === 'true';
    try {
      const orders = await this.prisma.orders.findMany({
        where: {
          draft: isDraft,
        },
        select: {
          id: true,
          table: true,
          name: true,
          draft: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
          items: {
            select: {
              id: true,
              amount: true,
              productId: true,
              orderId: true,
              createdAt: true,
              updatedAt: true,
              products: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  categoryId: true,
                  createdAt: true,
                  updatedAt: true,
                },
              },
            },
          },
        },
      });
      if (!orders) {
        return [];
      }
      return orders;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching orders');
    }
  }
  async findOne(id: string) {
    try {
      const order = await this.prisma.orders.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          table: true,
          name: true,
          draft: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
          items: {
            select: {
              id: true,
              amount: true,
              productId: true,
              orderId: true,
              createdAt: true,
              updatedAt: true,
              products: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  categoryId: true,
                  createdAt: true,
                  updatedAt: true,
                },
              },
            },
          },
        },
      });
      if (!order) {
        throw new NotFoundException(`Order #${id} not found`);
      }
      return order;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching order');
    }
  }
  async findAllByUserId(userId: string) {
    try {
      const orders = await this.prisma.orders.findMany({
        where: {
          userId,
        },
        select: {
          id: true,
          table: true,
          name: true,
          draft: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
          items: {
            select: {
              id: true,
              amount: true,
              productId: true,
              orderId: true,
              createdAt: true,
              updatedAt: true,
              products: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  categoryId: true,
                  createdAt: true,
                  updatedAt: true,
                },
              },
            },
          },
        },
      });
      if (!orders) {
        return [];
      }
      return orders;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching order');
    }
  }
  async findAllByTable(table: number) {
    try {
      const orders = await this.prisma.orders.findMany({
        where: {
          table,
        },
        select: {
          id: true,
          table: true,
          name: true,
          draft: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
          items: {
            select: {
              id: true,
              amount: true,
              productId: true,
              orderId: true,
              createdAt: true,
              updatedAt: true,
              products: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  categoryId: true,
                  createdAt: true,
                  updatedAt: true,
                },
              },
            },
          },
        },
      });
      if (!orders) {
        return [];
      }
      return orders;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching orders');
    }
  }
  async create(createOrderDto: CreateOrderDto, userId: string) {
    try {
      const order = await this.prisma.orders.create({
        data: {
          ...createOrderDto,
          userId,
        },
      });
      return {
        message: 'Order created successfully',
        order,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating order');
    }
  }
  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const order = await this.prisma.orders.update({
        where: {
          id,
        },
        data: updateOrderDto,
      });
      if (!order) {
        throw new NotFoundException(`Order #${id} not found`);
      }
      return order;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating order');
    }
  }

  async remove(id: string) {
    try {
      const order = await this.prisma.orders.findUnique({
        where: {
          id,
        },
      });
      if (!order) {
        throw new NotFoundException(`Order #${id} not found`);
      }
      await this.prisma.orders.delete({
        where: {
          id,
        },
      });
      return {
        message: `Order deleted successfully`,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Error deleting order');
    }
  }
}
