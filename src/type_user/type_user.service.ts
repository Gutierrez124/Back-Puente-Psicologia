import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeUser } from './entities/type_user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class TypeUserService {
  constructor(
    @InjectRepository(TypeUser)
    private tipo_usuarioRepo: Repository<TypeUser>,
  ) {}

  findAll(): Promise<TypeUser[]> {
    return this.tipo_usuarioRepo.find();
  }
  findByNombre(nombre: string): Promise<TypeUser | null> {
    return this.tipo_usuarioRepo.findOne({ where: { nombre } });
  }
  create(data: Partial<TypeUser>) {
    const tipo = this.tipo_usuarioRepo.create(data);
    return this.tipo_usuarioRepo.save(tipo);
  }
}
