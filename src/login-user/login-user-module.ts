import { RtStrategiest } from '../strategies/rt.strategies';
import { AtStrategiest } from '../strategies/at.strategies';

import { jwtConstants } from './constants';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { LoginUserController } from './login-controller.controller';
import { UsersModule } from '../users/create-users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './login-user-service.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [LoginUserController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, AtStrategiest, RtStrategiest],
  exports: [AuthService],
})
export class AuthModule {}
