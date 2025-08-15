import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaPacienteController } from './encuesta_paciente.controller';
import { EncuestaPacienteService } from './encuesta_paciente.service';

describe('EncuestaPacienteController', () => {
  let controller: EncuestaPacienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuestaPacienteController],
      providers: [EncuestaPacienteService],
    }).compile();

    controller = module.get<EncuestaPacienteController>(
      EncuestaPacienteController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
