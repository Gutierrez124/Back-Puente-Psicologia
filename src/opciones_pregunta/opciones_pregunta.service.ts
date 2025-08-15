import { Injectable } from '@nestjs/common';
import { CreateOpcionesPreguntaDto } from './dto/create-opciones_pregunta.dto';
import { UpdateOpcionesPreguntaDto } from './dto/update-opciones_pregunta.dto';

@Injectable()
export class OpcionesPreguntaService {
  create(createOpcionesPreguntaDto: CreateOpcionesPreguntaDto) {
    return 'This action adds a new opcionesPregunta';
  }

  findAll() {
    return `This action returns all opcionesPregunta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opcionesPregunta`;
  }

  update(id: number, updateOpcionesPreguntaDto: UpdateOpcionesPreguntaDto) {
    return `This action updates a #${id} opcionesPregunta`;
  }

  remove(id: number) {
    return `This action removes a #${id} opcionesPregunta`;
  }
}
