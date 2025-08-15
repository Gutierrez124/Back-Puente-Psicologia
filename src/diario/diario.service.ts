import { Injectable } from '@nestjs/common';
import { CreateDiarioDto } from './dto/create-diario.dto';
import { UpdateDiarioDto } from './dto/update-diario.dto';

@Injectable()
export class DiarioService {
  create(createDiarioDto: CreateDiarioDto) {
    return 'This action adds a new diario';
  }

  findAll() {
    return `This action returns all diario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diario`;
  }

  update(id: number, updateDiarioDto: UpdateDiarioDto) {
    return `This action updates a #${id} diario`;
  }

  remove(id: number) {
    return `This action removes a #${id} diario`;
  }
}
