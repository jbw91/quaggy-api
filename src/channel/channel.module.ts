import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { Channel } from './channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Channel])],
  components: [ChannelService],
  controllers: [ChannelController]
})
export class ChannelModule {}
