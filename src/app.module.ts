import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AtGuard } from '@/common-x/guards';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './login-user/login-user-module';
import { UsersModule } from './users/create-users.module';

import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, AuthModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    AppService,
  ],
})
export class AppModule {}
