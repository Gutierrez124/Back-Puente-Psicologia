import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaPacienteService } from './encuesta_paciente.service';

describe('EncuestaPacienteService', () => {
  let service: EncuestaPacienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncuestaPacienteService],
    }).compile();

    service = module.get<EncuestaPacienteService>(EncuestaPacienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
