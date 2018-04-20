import {
  Get,
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User> {
    return await this.userService.findOne(params.id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param() params,
    @Body() user: User
  ): Promise<void> {
    await this.userService.updateUser(params.id, user);
  }

  @Delete(':id')
  async deleteUser(@Param() params): Promise<void> {
    await this.userService.deleteUser(params.id);
  }
}
