import { PartialType } from '@nestjs/mapped-types';
import { CreateEjerciciosUserDto } from './create-ejercicios_user.dto';

export class UpdateEjerciciosUserDto extends PartialType(
  CreateEjerciciosUserDto,
) {}
