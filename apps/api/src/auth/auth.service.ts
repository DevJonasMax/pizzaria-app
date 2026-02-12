import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dtos/createUsers.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async login({ email, password }: AuthDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Credentials are not valid');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credentials are not valid');
    }
    return { message: 'Login successful' };
  }

  async signup({ email, name, password }: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const hasUser = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (hasUser) {
      throw new UnauthorizedException('Email already registered');
    }
    const user = await this.prisma.users.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
      omit: {
        password: true,
      },
    });
    return user;
  }
}
