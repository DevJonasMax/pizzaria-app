import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from '../../users/dtos/createUsers.dto';

export class AuthDto extends PickType(CreateUserDto, [
  'email',
  'password',
] as const) {}
