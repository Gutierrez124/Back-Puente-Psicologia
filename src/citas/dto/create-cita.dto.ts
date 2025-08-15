import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { StreamDescription } from 'typeorm';

export class CreateCitaDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  fecha: Date;

  @IsString()
  @IsNotEmpty()
  hora_inicio: string;

  @IsString()
  @IsNotEmpty()
  hora_fin: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  notas: string;

  @IsString()
  @IsNotEmpty()
  link_videollamada: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsString()
  @IsNotEmpty()
  comentarios: String;

  @IsOptional()
  pacienteId: number;

  @IsOptional()
  psicologoId: number;
}
