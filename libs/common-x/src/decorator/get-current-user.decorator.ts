import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// It is quite common that I have to get the req.user property for the current request
export const GetCurrentUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.user;
    return request.user[data];
  },
);
