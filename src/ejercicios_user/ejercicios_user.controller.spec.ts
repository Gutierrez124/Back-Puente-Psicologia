import { Test, TestingModule } from '@nestjs/testing';
import { EjerciciosUserController } from './ejercicios_user.controller';
import { EjerciciosUserService } from './ejercicios_user.service';

describe('EjerciciosUserController', () => {
  let controller: EjerciciosUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjerciciosUserController],
      providers: [EjerciciosUserService],
    }).compile();

    controller = module.get<EjerciciosUserController>(EjerciciosUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
