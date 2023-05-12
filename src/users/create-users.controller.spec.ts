import { Test, TestingModule } from '@nestjs/testing';
import { CreateUsersController } from './create-users.controller';
import { CreateUserService } from './create-user-service.service';

describe('CreateUsersController', () => {
  let controller: CreateUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUsersController],
      providers: [CreateUserService],
    }).compile();

    controller = module.get<CreateUsersController>(CreateUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
