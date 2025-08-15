import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeUserService } from './type_user.service';
import { CreateTypeUserDto } from './dto/create-type_user.dto';
import { UpdateTypeUserDto } from './dto/update-type_user.dto';

@Controller('type-user')
export class TypeUserController {
  constructor(private readonly typeUserService: TypeUserService) {}

  @Get()
  findAll() {
    return this.typeUserService.findAll();
  }

  @Post()
  create(@Body() body: { nombre: string }) {
    return this.typeUserService.create(body);
  }
}
