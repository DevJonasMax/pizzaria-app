import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dtos/createUsers.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login({ email, password }: AuthDto, res: Response) {
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
    const payload = { sub: user.id, email: user.email, role: user.role };
    const access_token = await this.jwtService.signAsync(payload);
    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    });
    return { message: 'Login successful', access_token };
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
