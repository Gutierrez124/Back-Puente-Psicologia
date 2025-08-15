import { Module } from '@nestjs/common';
import { DiarioService } from './diario.service';
import { DiarioController } from './diario.controller';

@Module({
  controllers: [DiarioController],
  providers: [DiarioService],
})
export class DiarioModule {}
