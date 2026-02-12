import { IsNotEmpty, IsNumber } from 'class-validator';
import { MinLength } from 'class-validator';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  categoryId: string;
}
