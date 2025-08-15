import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesPreguntaController } from './opciones_pregunta.controller';
import { OpcionesPreguntaService } from './opciones_pregunta.service';

describe('OpcionesPreguntaController', () => {
  let controller: OpcionesPreguntaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcionesPreguntaController],
      providers: [OpcionesPreguntaService],
    }).compile();

    controller = module.get<OpcionesPreguntaController>(
      OpcionesPreguntaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
