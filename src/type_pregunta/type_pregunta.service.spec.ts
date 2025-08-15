import { Test, TestingModule } from '@nestjs/testing';
import { TypePreguntaService } from './type_pregunta.service';

describe('TypePreguntaService', () => {
  let service: TypePreguntaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypePreguntaService],
    }).compile();

    service = module.get<TypePreguntaService>(TypePreguntaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
