import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserComment } from './entities/user-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserComment])],
  controllers: [],
  providers: [],
})
export class UserCommentModule {}
