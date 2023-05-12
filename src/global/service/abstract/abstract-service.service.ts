/* eslint-disable prettier/prettier */
export abstract class AbstractService {
  // abstract handleTask<Type>(obj: Type): Type;
  abstract handleTask<Type>(obj: Type): Promise<Type> | any;
}
