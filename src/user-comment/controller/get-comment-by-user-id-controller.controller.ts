/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * @description - You should create a class, such as {CreateUserController}, in which a GET method returns the a single comment based on the user's ID. Function name and signature should follow the same scheme as
 * CreateUserController in the sense that they should extend {AbstractController} and implement the handleRoute method. The implementation of the method
 * is for the candidate to decide, but please keep in mind SOLID principles.
 */

import { Controller, Get, Param } from '@nestjs/common';
import { CreateUserService } from 'src/users/create-user-service.service';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { AbstractController } from 'src/global/controller/abstract/abstract-controller.controller';
import { User } from 'src/users/entities/user.entity';

@Controller('users')
export class CreateUserController extends AbstractController<User> {
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
  constructor(private readonly CreateUserService: CreateUserService) {
    super();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.CreateUserService.findOne(id);
  }
}
