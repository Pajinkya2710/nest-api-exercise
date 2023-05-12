/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserService } from './create-user-service.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AbstractController } from 'src/global/controller/abstract/abstract-controller.controller';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { User } from './entities/user.entity';

@Controller('users')
export class CreateUsersController extends AbstractController<User> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleRoute(obj: any, request?: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, response?: Response<any, Record<string, any>>): Promise<any> {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly CreateUserService: CreateUserService) {
    super();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.CreateUserService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.CreateUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.CreateUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.CreateUserService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.CreateUserService.remove(id);
  }
}
