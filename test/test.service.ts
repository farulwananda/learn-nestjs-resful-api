import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
import * as brcypt from 'bcrypt';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: {
        username: 'test',
      },
    });
  }

  async createUser() {
    await this.prismaService.user.create({
      data: {
        username: 'test',
        name: 'test',
        password: await brcypt.hash('test', 10),
      },
    });
  }
}
