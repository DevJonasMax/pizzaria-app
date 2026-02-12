import { PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './createItems.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {}
