import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user-service.service';
import { CreateUsersController } from './create-users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule, CreateUserService],
  controllers: [CreateUsersController],
  providers: [CreateUserService],
})
export class UsersModule {}
