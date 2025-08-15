import { Module } from '@nestjs/common';
import { TypeUserService } from './type_user.service';
import { TypeUserController } from './type_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUser } from './entities/type_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeUser])],
  controllers: [TypeUserController],
  providers: [TypeUserService],
  exports: [TypeUserService],
})
export class TypeUserModule {}
