import { Injectable } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//import { ZoomService } from 'zoom/zoom.service';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private CitaRepository: Repository<Cita>,
    //private readonly zoomService: ZoomService,
  ) {}

}
