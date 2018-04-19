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

  async findOne(id: number): Promise<Channel> {
    return await this.channelRepository.findOneById(id);
  }

  async createChannel(channel: Channel): Promise<Channel> {
    const newChannel = new Channel();
    newChannel.name = channel.name;
    newChannel.public = channel.public;
    newChannel.team = channel.team;
    return await this.channelRepository.save(newChannel);
  }

  async updateChannel(id: number, channel: Channel): Promise<void> {
    await this.channelRepository.updateById(id, channel);
  }

  async deleteChannel(id: number): Promise<void> {
    await this.channelRepository.deleteById(id);
  }
}
