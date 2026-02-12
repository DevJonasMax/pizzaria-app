import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dtos/crete-product.dto';
import { UpdateProductDto } from './dtos/update-products.dtos';
import { Prisma } from '../../generated/prisma/client.js';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  BadRequestException,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    try {
      const products = await this.prisma.products.findMany();
      return products;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error fetching products');
      }
      throw new InternalServerErrorException('Error fetching products');
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.prisma.products.findUnique({
        where: {
          id,
        },
      });
      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Error fetching product');
    }
  }
  async findByCategoryId(categoryId: string) {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          categoryId,
        },
      });
      return products;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error creating product');
      }
      throw new InternalServerErrorException('Error creating product');
    }
  }
  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.prisma.products.create({
        data: createProductDto,
      });
      return product;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Error creating product');
      }
      throw new InternalServerErrorException('Error creating product');
    }
  }
  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prisma.products.update({
        where: {
          id,
        },
        data: updateProductDto,
      });
      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Error updating product');
    }
  }
  async remove(id: string) {
    try {
      const product = await this.prisma.products.delete({
        where: {
          id,
        },
      });
      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Error deleting product');
    }
  }
}
