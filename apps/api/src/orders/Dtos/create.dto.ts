import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  table: number;
  @IsOptional()
  name?: string;
}
