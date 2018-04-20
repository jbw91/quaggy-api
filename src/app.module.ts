import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { ChannelModule } from 'channel/channel.module';
import { UserModule } from 'user/user.module';
import { TeamModule } from 'team/team.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ChannelModule, UserModule, TeamModule],
  controllers: [AppController],
  components: []
})
export class AppModule {}
