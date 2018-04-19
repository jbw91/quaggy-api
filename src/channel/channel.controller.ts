import { Get, Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Channel } from './channel.entity';
import { ChannelService } from './channel.service';

@Controller('channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async findAll(): Promise<Channel[]> {
    return await this.channelService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Channel> {
    return await this.channelService.findOne(params.id);
  }

  @Post()
  async createChannel(@Body() channel: Channel): Promise<Channel> {
    return await this.channelService.createChannel(channel);
  }

  @Put(':id')
  async updateChannel(@Param() params, @Body() channel: Channel): Promise<void> {
    await this.channelService.updateChannel(params.id, channel);
  }

  @Delete(':id')
  async deleteChannel(@Param() params): Promise<void> {
    await this.channelService.deleteChannel(params.id);
  }
}
