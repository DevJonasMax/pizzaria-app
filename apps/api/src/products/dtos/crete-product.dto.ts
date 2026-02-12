import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
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
  banner: string;
  @IsNotEmpty()
  @IsString()
  categoryId: string;
  @IsNotEmpty()
  @IsBoolean()
  disabled?: boolean;
}
