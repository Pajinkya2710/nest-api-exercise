/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './login-user-service.service';

import { Public } from '@/common-x/decorator';
import { GetCurrentUser } from '@/common-x/decorator';
import { RtGuard } from '@/common-x/guards';
import { GetCurrentUserId } from '@/common-x/decorator';

import { AuthDto } from '../dto/login.dto';
import { Tokens } from '../types/tokens.type';

import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AbstractController } from 'src/global/controller/abstract/abstract-controller.controller';
import { User } from 'src/users/entities/user.entity';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

@Controller({
  path: 'auth',
  version: '1.0.2',
})
export class LoginUserController extends AbstractController<User> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleRoute(
    obj: User,
    request?: Request<
      ParamsDictionary,
      any,
      any,
      ParsedQs,
      Record<string, any>
    >,
    response?: Response<any, Record<string, any>>,
  ): Promise<User> {
    throw new Error('Method not implemented.');
  }
  constructor(private authService: AuthService) {
    super();
  }
// These api is used for the login user
  @Public()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: AuthDto) {
    return await this.authService.login(dto);
  }
//These api is used for the create a user
  @Public()
  @Get('/createUser')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: CreateUserDto): Promise<Tokens> {
    return await this.authService.register(dto);
  }
//These api is used for the logout a user
  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetCurrentUserId() userId: number) {
    return await this.authService.logout(userId);
  }
// these api when i try to get req.user using nestjs with jwt it always returns the same user no matter if i changed user.
  @Public()
  @UseGuards(RtGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUserId() userId: number,
  ) {
    return await this.authService.refreshTokens(userId, refreshToken);
  }
}










 /**
   * @description - This route should register a new user.
   * @todo - The User entity and CreateUserDTO need to be adapted
   * so that users have a password and username properties. This should be reflected in the database.
   * Don't worry about encryption for now just save the password in the database for exercise sake.
   * @todo - Add a column to user entity called 'user_role'. All users have a default role of 'participant',
   * but the role 'admin' should be accepted when creating a new user.
   * The CreateUserDTO should be changed as well to be able to receive the user type as parameter from the request body.
   * @param userDto
   * @returns User object if username and password matches database user entry. Appropriate Http.Status for
   * user not found message, or appropriate Http.Status error message.
   */