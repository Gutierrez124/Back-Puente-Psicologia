import { Module } from '@nestjs/common';
import { EjerciciosUserService } from './ejercicios_user.service';
import { EjerciciosUserController } from './ejercicios_user.controller';

@Module({
  controllers: [EjerciciosUserController],
  providers: [EjerciciosUserService],
})
export class EjerciciosUserModule {}
