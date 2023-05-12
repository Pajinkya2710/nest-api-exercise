import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
//@SetMetadata decorator is provided to attach metadata to a class or method. It stores the metadata as a key-value pair. In the above code, the key is roles , and the value is passed from the roles argument.
