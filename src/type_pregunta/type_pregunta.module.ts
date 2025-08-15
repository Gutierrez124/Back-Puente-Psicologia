import { Module } from '@nestjs/common';
import { TypePreguntaService } from './type_pregunta.service';
import { TypePreguntaController } from './type_pregunta.controller';

@Module({
  controllers: [TypePreguntaController],
  providers: [TypePreguntaService],
})
export class TypePreguntaModule {}
