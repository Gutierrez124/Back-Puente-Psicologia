import { Injectable } from '@nestjs/common';
import { CreateEjerciciosUserDto } from './dto/create-ejercicios_user.dto';
import { UpdateEjerciciosUserDto } from './dto/update-ejercicios_user.dto';

@Injectable()
export class EjerciciosUserService {
  create(createEjerciciosUserDto: CreateEjerciciosUserDto) {
    return 'This action adds a new ejerciciosUser';
  }

  findAll() {
    return `This action returns all ejerciciosUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ejerciciosUser`;
  }

  update(id: number, updateEjerciciosUserDto: UpdateEjerciciosUserDto) {
    return `This action updates a #${id} ejerciciosUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejerciciosUser`;
  }
}
