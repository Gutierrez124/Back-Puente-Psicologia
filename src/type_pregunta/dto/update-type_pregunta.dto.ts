import { PartialType } from '@nestjs/mapped-types';
import { CreateTypePreguntaDto } from './create-type_pregunta.dto';

export class UpdateTypePreguntaDto extends PartialType(CreateTypePreguntaDto) {}
