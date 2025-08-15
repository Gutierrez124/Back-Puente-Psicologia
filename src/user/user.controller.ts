import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity'; // Si el controlador está en src/controllers
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create/psicologo')
  async createPsicologo(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto, 3);
  }

  @Post('create/paciente')
  async createPaciente(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto, 2);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body()
    body: {
      dni: string;
      name: string;
      apellido: string;
      direccion: string;
      telefono: string;
      tel_fijo: string;
      email: string;
      password: string;
    },
  ): Promise<User> {
    // console.log('Request Body:', body);
    return this.userService.update(
      id,
      body.dni,
      body.name,
      body.apellido,
      body.direccion,
      body.telefono,
      body.tel_fijo,
      body.email,
      body.password,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }

  @Get('by-type/:id')
  async listByType(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.listByTypeUserId(id);
  }
}
