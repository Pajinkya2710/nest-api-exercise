/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export abstract class AbstractController<Type> {
  abstract handleRoute(
    obj: Type,
    request?: Request,
    response?: Response,
  ): Promise<Type>;
}
