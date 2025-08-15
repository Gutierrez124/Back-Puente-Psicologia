import { Injectable } from '@nestjs/common';
import { CreateTypePreguntaDto } from './dto/create-type_pregunta.dto';
import { UpdateTypePreguntaDto } from './dto/update-type_pregunta.dto';

@Injectable()
export class TypePreguntaService {
  create(createTypePreguntaDto: CreateTypePreguntaDto) {
    return 'This action adds a new typePregunta';
  }

  findAll() {
    return `This action returns all typePregunta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typePregunta`;
  }

  update(id: number, updateTypePreguntaDto: UpdateTypePreguntaDto) {
    return `This action updates a #${id} typePregunta`;
  }

  remove(id: number) {
    return `This action removes a #${id} typePregunta`;
  }
}
