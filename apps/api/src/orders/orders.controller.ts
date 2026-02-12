import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Query,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './Dtos/create.dto';
import { UpdateOrderDto } from './Dtos/update.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get()
  findAll(@Query('draft') draft?: boolean) {
    return this.ordersService.findAll(draft);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
  @Get('user/:userId')
  findAllByUserId(@Param('userId') userId: string) {
    return this.ordersService.findAllByUserId(userId);
  }
  @Get('table/:table')
  findAllByTable(@Param('table') table: number) {
    return this.ordersService.findAllByTable(table);
  }
  @Post('/create/:userId')
  create(
    @Body() createOrderDto: CreateOrderDto,
    @Param('userId') userId: string,
  ) {
    return this.ordersService.create(createOrderDto, userId);
  }
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }
}
