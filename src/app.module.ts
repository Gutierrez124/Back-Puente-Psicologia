import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { TypeUser } from './type_user/entities/type_user.entity';
import { DiarioModule } from './diario/diario.module';
import { EntradasModule } from './entradas/entradas.module';
import { TypePreguntaModule } from './type_pregunta/type_pregunta.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { OpcionesPreguntaModule } from './opciones_pregunta/opciones_pregunta.module';
import { RespuestasModule } from './respuestas/respuestas.module';
import { EncuestaPacienteModule } from './encuesta_paciente/encuesta_paciente.module';
import { EncuestaModule } from './encuesta/encuesta.module';
import { AuditoriasModule } from './auditorias/auditorias.module';
import { EjerciciosUserModule } from './ejercicios_user/ejercicios_user.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { MensajesModule } from './mensajes/mensajes.module';
// import { CitasModule } from './citas/citas.module';
import { Auditoria } from './auditorias/entities/auditoria.entity';
import { Cita } from './citas/entities/cita.entity';
import { Diario } from './diario/entities/diario.entity';
import { Ejercicio } from './ejercicios/entities/ejercicio.entity';
import { EjerciciosUser } from './ejercicios_user/entities/ejercicios_user.entity';
import { Encuesta } from './encuesta/entities/encuesta.entity';
import { EncuestaPaciente } from './encuesta_paciente/entities/encuesta_paciente.entity';
import { Entrada } from './entradas/entities/entrada.entity';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { OpcionesPregunta } from './opciones_pregunta/entities/opciones_pregunta.entity';
import { Pregunta } from './preguntas/entities/pregunta.entity';
import { Respuesta } from './respuestas/entities/respuesta.entity';
import { TypePregunta } from './type_pregunta/entities/type_pregunta.entity';
import { ZoomModule } from './zoom/zoom.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // o tu IP si estás usando MySQL remoto
      port: 3307,
      username: 'root', // tu usuario de MySQL
      password: '060706', // tu contraseña de MySQL
      database: 'telepsicologia', // el nombre de la base de datos
      entities: [
        User,
        TypeUser,
        Auditoria,
        Cita,
        Diario,
        Ejercicio,
        EjerciciosUser,
        Encuesta,
        EncuestaPaciente,
        Entrada,
        Mensaje,
        OpcionesPregunta,
        Pregunta,
        Respuesta,
        TypePregunta,
      ], // aquí irán las entidades que definamos más adelante
      synchronize: false, // solo en desarrollo; evita que se pierdan datos
    }),
    // Otros módulos van aquí...
    UserModule,
    AuthModule,
    // CitasModule,
    MensajesModule,
    EjerciciosModule,
    EjerciciosUserModule,
    AuditoriasModule,
    EncuestaModule,
    EncuestaPacienteModule,
    RespuestasModule,
    OpcionesPreguntaModule,
    PreguntasModule,
    TypePreguntaModule,
    EntradasModule,
    DiarioModule,
    ZoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
