import { Test, TestingModule } from '@nestjs/testing';
import { EjerciciosUserService } from './ejercicios_user.service';

describe('EjerciciosUserService', () => {
  let service: EjerciciosUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EjerciciosUserService],
    }).compile();

    service = module.get<EjerciciosUserService>(EjerciciosUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
