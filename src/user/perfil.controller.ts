import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from 'auth/roles.guard';

@Controller('perfil')
@UseGuards(JwtAuthGuard, RolesGuard) // Para asegurar que solo usuarios autenticados acceden
export class PerfilController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getProfile(@Req() req) {
    // req.user tiene los datos del usuario decoded del JWT
    const userId = req.user.id;
    return this.userService.findOne(userId);
  }
  @Put()
  async updateProfile(@Req() req, @Body() updateData: any) {
    const userId = req.user.id;
    // Aquí puedes validar o transformar updateData para que solo permita campos del perfil
    return this.userService.update(
      userId,
      updateData.dni,
      updateData.name,
      updateData.apellido,
      updateData.direccion,
      updateData.telefono,
      updateData.tel_fijo,
      updateData.email,
      updateData.password,
    );
  }
}
