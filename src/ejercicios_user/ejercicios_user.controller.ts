import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EjerciciosUserService } from './ejercicios_user.service';
import { CreateEjerciciosUserDto } from './dto/create-ejercicios_user.dto';
import { UpdateEjerciciosUserDto } from './dto/update-ejercicios_user.dto';

@Controller('ejercicios-user')
export class EjerciciosUserController {
  constructor(private readonly ejerciciosUserService: EjerciciosUserService) {}

  @Post()
  create(@Body() createEjerciciosUserDto: CreateEjerciciosUserDto) {
    return this.ejerciciosUserService.create(createEjerciciosUserDto);
  }

  @Get()
  findAll() {
    return this.ejerciciosUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejerciciosUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEjerciciosUserDto: UpdateEjerciciosUserDto,
  ) {
    return this.ejerciciosUserService.update(+id, updateEjerciciosUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejerciciosUserService.remove(+id);
  }
}
