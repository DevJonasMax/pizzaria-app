import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { UpdateItemDto } from './dtos/updateItems.dto';
import { CreateItemDto } from './dtos/createItems.dto';
import { ItemsService } from './items.service';

@Controller('orders/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
