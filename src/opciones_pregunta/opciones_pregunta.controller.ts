import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OpcionesPreguntaService } from './opciones_pregunta.service';
import { CreateOpcionesPreguntaDto } from './dto/create-opciones_pregunta.dto';
import { UpdateOpcionesPreguntaDto } from './dto/update-opciones_pregunta.dto';

@Controller('opciones-pregunta')
export class OpcionesPreguntaController {
  constructor(
    private readonly opcionesPreguntaService: OpcionesPreguntaService,
  ) {}

  @Post()
  create(@Body() createOpcionesPreguntaDto: CreateOpcionesPreguntaDto) {
    return this.opcionesPreguntaService.create(createOpcionesPreguntaDto);
  }

  @Get()
  findAll() {
    return this.opcionesPreguntaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcionesPreguntaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOpcionesPreguntaDto: UpdateOpcionesPreguntaDto,
  ) {
    return this.opcionesPreguntaService.update(+id, updateOpcionesPreguntaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcionesPreguntaService.remove(+id);
  }
}
