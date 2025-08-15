import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypePreguntaService } from './type_pregunta.service';
import { CreateTypePreguntaDto } from './dto/create-type_pregunta.dto';
import { UpdateTypePreguntaDto } from './dto/update-type_pregunta.dto';

@Controller('type-pregunta')
export class TypePreguntaController {
  constructor(private readonly typePreguntaService: TypePreguntaService) {}

  @Post()
  create(@Body() createTypePreguntaDto: CreateTypePreguntaDto) {
    return this.typePreguntaService.create(createTypePreguntaDto);
  }

  @Get()
  findAll() {
    return this.typePreguntaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typePreguntaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypePreguntaDto: UpdateTypePreguntaDto,
  ) {
    return this.typePreguntaService.update(+id, updateTypePreguntaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typePreguntaService.remove(+id);
  }
}
