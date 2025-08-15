import { Test, TestingModule } from '@nestjs/testing';
import { TypePreguntaController } from './type_pregunta.controller';
import { TypePreguntaService } from './type_pregunta.service';

describe('TypePreguntaController', () => {
  let controller: TypePreguntaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePreguntaController],
      providers: [TypePreguntaService],
    }).compile();

    controller = module.get<TypePreguntaController>(TypePreguntaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
