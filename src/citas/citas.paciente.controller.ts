// import { Controller, Body,Param,Req } from "@nestjs/common";
// import { CitasService } from "./citas.service";
// import { Get, Put } from "@nestjs/common";
// @Controller('paciente/citas')
// export class citaPacienteControlle{
//     constructor( private readonly citasService: CitasService){}

//     @Get()
//     async findForPacientes(@Req() req){
//         const pacienteId= req.user.id;
//         return this.citasService.findByPaciente(pacienteId);
//     }

//     @Put(':id')
//     async findOne(@Param('id') id:number){
//         return this.citasService.findOne(id);
//     }
// }
