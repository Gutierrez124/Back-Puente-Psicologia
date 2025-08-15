import { Module } from '@nestjs/common';
import { OpcionesPreguntaService } from './opciones_pregunta.service';
import { OpcionesPreguntaController } from './opciones_pregunta.controller';

@Module({
  controllers: [OpcionesPreguntaController],
  providers: [OpcionesPreguntaService],
})
export class OpcionesPreguntaModule {}
