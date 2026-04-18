import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('admin/citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}
}
