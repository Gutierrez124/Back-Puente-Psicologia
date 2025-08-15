import { Injectable } from '@nestjs/common';
import { CreateZoomDto } from './dto/create-zoom.dto';
import { UpdateZoomDto } from './dto/update-zoom.dto';

@Injectable()
export class ZoomService {
  create(createZoomDto: CreateZoomDto) {
    return 'This action adds a new zoom';
  }

  findAll() {
    return `This action returns all zoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zoom`;
  }

  update(id: number, updateZoomDto: UpdateZoomDto) {
    return `This action updates a #${id} zoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} zoom`;
  }
}
