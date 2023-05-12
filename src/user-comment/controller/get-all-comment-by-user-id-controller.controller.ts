/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.CreateUserService.findAll();
  }
}

/**
 * @description - You shuold create a class, such as {CreateUserController}, in which a GET method will receive
 * an User ID as parameter and return all of their comments stored in the database. Function name and signature should follow the same scheme as
 * CreateUserController in the sense that they should extend {AbstractController} and implement the handleRoute method. The implementation of the method
 * is for the candidate to decide, but please keep in mind SOLID principles.
 */
