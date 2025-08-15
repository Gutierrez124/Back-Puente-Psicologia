import { Module } from '@nestjs/common';
import { EncuestaPacienteService } from './encuesta_paciente.service';
import { EncuestaPacienteController } from './encuesta_paciente.controller';

@Module({
  controllers: [EncuestaPacienteController],
  providers: [EncuestaPacienteService],
})
export class EncuestaPacienteModule {}
