import { PartialType } from '@nestjs/mapped-types';
import { CreateOpcionesPreguntaDto } from './create-opciones_pregunta.dto';

export class UpdateOpcionesPreguntaDto extends PartialType(
  CreateOpcionesPreguntaDto,
) {}
