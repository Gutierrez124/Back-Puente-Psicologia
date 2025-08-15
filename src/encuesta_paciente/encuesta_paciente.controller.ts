import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EncuestaPacienteService } from './encuesta_paciente.service';
import { CreateEncuestaPacienteDto } from './dto/create-encuesta_paciente.dto';
import { UpdateEncuestaPacienteDto } from './dto/update-encuesta_paciente.dto';

@Controller('encuesta-paciente')
export class EncuestaPacienteController {
  constructor(
    private readonly encuestaPacienteService: EncuestaPacienteService,
  ) {}

  @Post()
  create(@Body() createEncuestaPacienteDto: CreateEncuestaPacienteDto) {
    return this.encuestaPacienteService.create(createEncuestaPacienteDto);
  }

  @Get()
  findAll() {
    return this.encuestaPacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuestaPacienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEncuestaPacienteDto: UpdateEncuestaPacienteDto,
  ) {
    return this.encuestaPacienteService.update(+id, updateEncuestaPacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuestaPacienteService.remove(+id);
  }
}
