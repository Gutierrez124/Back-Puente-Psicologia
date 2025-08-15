import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { TypeUserModule } from '../type_user/type_user.module';
import { TypeUser } from '../type_user/entities/type_user.entity';
import { PerfilController } from './perfil.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, TypeUser]), TypeUserModule],
  controllers: [UserController, PerfilController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
