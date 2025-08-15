import { Injectable } from '@nestjs/common';
import { CreateEncuestaPacienteDto } from './dto/create-encuesta_paciente.dto';
import { UpdateEncuestaPacienteDto } from './dto/update-encuesta_paciente.dto';

@Injectable()
export class EncuestaPacienteService {
  create(createEncuestaPacienteDto: CreateEncuestaPacienteDto) {
    return 'This action adds a new encuestaPaciente';
  }

  findAll() {
    return `This action returns all encuestaPaciente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encuestaPaciente`;
  }

  update(id: number, updateEncuestaPacienteDto: UpdateEncuestaPacienteDto) {
    return `This action updates a #${id} encuestaPaciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} encuestaPaciente`;
  }
}
