// import { Injectable } from '@nestjs/common';
// import { CreateCitaDto } from './dto/create-cita.dto';
// import { UpdateCitaDto } from './dto/update-cita.dto';
// import { Cita } from './entities/cita.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ZoomService } from 'zoom/zoom.service';

// @Injectable()
// export class CitasService {
//   constructor(
//     @InjectRepository(Cita)
//     private CitaRepository: Repository<Cita>,
//     private readonly zoomService: ZoomService,
//   ) {}

//   async create(dto: CreateCitaDto){
//     const cita = this.CitaRepository.create(dto);

//     if (dto.tipo === 'virtual') {
//         const enlaceZoom = await this.crearreunionZoom(dto);
//         cita.enlace = enlaceZoom;
//     }
//     return this.CitaRepository.save(cita);
//   }
//   async findAll() {
//     return this.CitaRepository.find({ relations: ['paciente', 'psicologo'] });
//   }

//   async findOne(id: number) {
//     return this.CitaRepository.findOne({ where: { id }, relations: ['paciente', 'psicologo'] });
//   }

//   async findByPaciente(pacienteId: number) {
//     return this.CitaRepository.find({ where: { pacienteId }, relations: ['psicologo'] });
//   }

//   async findByPsicologo(psicologoId: number) {
//     return this.CitaRepository.find({ where: { psicologoId }, relations: ['paciente'] });
//   }

//   async update(id: number, dto: UpdateCitaDto) {
//     await this.CitaRepository.update(id, dto);
//     return this.CitaRepository.findOne({ where: { id } });
//   }

//   async remove(id: number) {
//     return this.CitaRepository.delete(id);
//   }

//   async cambiarEstado(id: number, estado: string) {
//     const cita = await this.CitaRepository.findOne({ where: { id } });
//     cita.estado = estado;
//     return this.CitaRepository.save(cita);
//   }
// }
