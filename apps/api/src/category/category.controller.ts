import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dtos/category.dto';
import { Param, Delete, Patch } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }
  @Get('/category-name/:name')
  async findOneByName(@Param('name') name: string) {
    return await this.categoryService.findOneName(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.categoryService.findById(id);
  }

  @Post('create')
  async create(@Body() { name }: CategoryDto) {
    return await this.categoryService.create(name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.categoryService.delete(id);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() { name: newName }: CategoryDto,
  ) {
    return await this.categoryService.update(id, newName);
  }
}
