import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create.dto';
import { IsOptional, IsString } from 'class-validator';
import { IsBoolean } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsOptional()
  @IsBoolean()
  status?: boolean;
  @IsOptional()
  @IsBoolean()
  draft?: boolean;
  @IsOptional()
  @IsString()
  name?: string;
}
