import { IsNumber, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  productId: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  orderId: string;
}
