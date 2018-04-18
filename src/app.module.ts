import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { ChannelModule } from 'channel/channel.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ChannelModule
  ],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
