import { Component, Inject, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { UserUsernameException, UserEmailException } from './user.exceptions';

@Component()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneById(id);
  }

  async createUser(user: User): Promise<User> {
    const newUser = new User();
    newUser.email = user.email;
    newUser.username = user.username;
    newUser.password = await bcrypt.hash(user.password, 10);
    newUser.teams = user.teams;
    try {
      return await this.userRepository.save(newUser);
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') {
        // Handle duplicate key error
        if (e.message.indexOf('username') !== -1) {
          throw new UserUsernameException(newUser.username);
        } else if (e.message.indexOf('email') !== -1) {
          throw new UserEmailException(newUser.email);
        }
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(id: number, user: User): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
