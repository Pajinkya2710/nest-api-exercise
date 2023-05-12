import { Injectable } from '@nestjs/common';
import { AbstractService } from './global/service/abstract/abstract-service.service';

@Injectable()
export class AppService extends AbstractService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleTask<Type>(obj: Type) {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
