/*
https://docs.nestjs.com/openapi/decorators#decorators

I mainly use decorators to keep my code clean, readable in a more logical and expressive way. 
To be honest these my 1st nestjs project all things I read and implement so sorry if there is unwanted mistake ...
*/

//I can access the user's information using the following code @nestjs/common for building efficient, scalable Node.js server-side applications.
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentUserId = createParamDecorator(
  (data: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    return request.user['sub'];
  },
);
