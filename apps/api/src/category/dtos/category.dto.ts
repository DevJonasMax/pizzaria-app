import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;
}
