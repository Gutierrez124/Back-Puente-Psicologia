import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // Si el servicio está en src/services
import { TypeUser } from '../../src/type_user/entities/type_user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Usamos el repositorio de User
    @InjectRepository(TypeUser)
    private typeUserRespository: Repository<TypeUser>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['tipo_usuario'],
    });
  }

  async createUser(
    CreateUserDto: CreateUserDto,
    typeUserId: number,
  ): Promise<User> {
    const typeUser = await this.typeUserRespository.findOne({
      where: { id: typeUserId },
    });
    if (!typeUser) {
      throw new Error('Tipo de usuario no encontrado');
    }

    const hasheadPassword = await bcrypt.hash(CreateUserDto.password, 10);

    const user = this.userRepository.create({
      ...CreateUserDto,
      tipo_usuario: typeUser,
      password: hasheadPassword,
    });

    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(
    id: number,
    dni: string,
    name: string,
    apellido: string,
    direccion: string,
    telefono: string,
    tel_fijo: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    user.dni = dni;
    user.name = name;
    user.apellido = apellido;
    user.direccion = direccion;
    user.telefono = telefono;
    user.tel_fijo = tel_fijo;
    user.email = email;
    user.password = password;

    if (password && password.trim() !== '') {
      user.password = await bcrypt.hash(password, 10);
    }
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async listByTypeUserId(typeId: number) {
    return await this.userRepository.find({
      where: { tipo_usuario: { id: typeId } },
      relations: ['tipo_usuario'],
    });
  }
}
