import { Body, Controller, Get, Post, Patch, Delete } from '@nestjs/common';

import { CreateItemDto } from './dtos/items.dto';
import { ItemsService } from './items.service';

@Controller('orders/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }
  @Patch(':id')
  update(@Body('id') id: string, @Body() updateItemDto: CreateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }
  @Delete(':id')
  remove(@Body('id') id: string) {
    return this.itemsService.remove(id);
  }
}
