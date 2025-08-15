// import { Body, Controller, Param, Req } from "@nestjs/common";
// import { CitasService } from "./citas.service";
// import { Get, Put } from "@nestjs/common";

// @Controller('psicologo/citas')
// export class citaPsicologoController {
//     constructor(private readonly citasService: CitasService){}

//     @Get()
//     async findForPsicologo(@Req() req) {
//         const psicologoId = req.user.id;
//         return this.citasService.findByPsicologo(psicologoId);
//     }

//     @Put(':id/estado')
//     async cambiarEstado(@Param('id') id: number, @Body('estado') estado: string) {
//         return this.citasService.cambiarEstado(id,estado);
//     }
// }
