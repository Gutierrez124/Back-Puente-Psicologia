import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesPreguntaService } from './opciones_pregunta.service';

describe('OpcionesPreguntaService', () => {
  let service: OpcionesPreguntaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcionesPreguntaService],
    }).compile();

    service = module.get<OpcionesPreguntaService>(OpcionesPreguntaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
