import { CreateProductDto } from './crete-product.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
