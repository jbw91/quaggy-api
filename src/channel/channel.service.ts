import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Channel } from './channel.entity';

@Component()
export class ChannelService {
  constructor(
    @InjectRepository(Channel) private readonly channelRepository: Repository<Channel>
  ) {}

  async findAll(): Promise<Channel[]> {
    return await this.channelRepository.find();
  }
}
