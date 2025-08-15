import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestaPacienteDto } from './create-encuesta_paciente.dto';

export class UpdateEncuestaPacienteDto extends PartialType(
  CreateEncuestaPacienteDto,
) {}
