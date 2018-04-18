import { Get, Controller } from '@nestjs/common';
import { Channel } from './channel.entity';
import { ChannelService } from './channel.service';

@Controller('channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  findAll(): Promise<Channel[]> {
    return this.channelService.findAll();
  }
}
