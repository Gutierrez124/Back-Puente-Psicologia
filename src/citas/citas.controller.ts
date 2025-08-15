// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { CitasService } from './citas.service';
// import { CreateCitaDto } from './dto/create-cita.dto';
// import { UpdateCitaDto } from './dto/update-cita.dto';

// @Controller('admin/citas')
// export class CitasController {
//   constructor(private readonly citasService: CitasService) {}

//   @Post()
//   async create(@Body() dto: CreateCitaDto) {
//     return this.citasService.create(dto);
//   }

//   @Get()
//   async findAll() {
//     return this.citasService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     return this.citasService.findOne(+id);
//   }

//   @Patch(':id')
//   async update(@Param('id') id: string, @Body() updateCitaDto: UpdateCitaDto) {
//     return this.citasService.update(+id, updateCitaDto);
//   }

//   @Delete(':id')
//   async remove(@Param('id') id: string) {
//     return this.citasService.remove(+id);
//   }
// }
