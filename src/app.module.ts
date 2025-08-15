import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { TypeUserModule } from './type_user/type_user.module';
import { TypeUser } from './type_user/entities/type_user.entity';
import { DiarioModule } from '../src/diario/diario.module';
import { EntradasModule } from '../src/entradas/entradas.module';
import { TypePreguntaModule } from '../src/type_pregunta/type_pregunta.module';
import { PreguntasModule } from '../src/preguntas/preguntas.module';
import { OpcionesPreguntaModule } from '../src/opciones_pregunta/opciones_pregunta.module';
import { RespuestasModule } from '../src/respuestas/respuestas.module';
import { EncuestaPacienteModule } from '../src/encuesta_paciente/encuesta_paciente.module';
import { EncuestaModule } from '../src/encuesta/encuesta.module';
import { AuditoriasModule } from '../src/auditorias/auditorias.module';
import { EjerciciosUserModule } from '../src/ejercicios_user/ejercicios_user.module';
import { EjerciciosModule } from '../src/ejercicios/ejercicios.module';
import { MensajesModule } from '../src/mensajes/mensajes.module';
// import { CitasModule } from '../src/citas/citas.module';
import { Auditoria } from '../src/auditorias/entities/auditoria.entity';
import { Cita } from '../src/citas/entities/cita.entity';
import { Diario } from '../src/diario/entities/diario.entity';
import { Ejercicio } from '../src/ejercicios/entities/ejercicio.entity';
import { EjerciciosUser } from '../src/ejercicios_user/entities/ejercicios_user.entity';
import { Encuesta } from '../src/encuesta/entities/encuesta.entity';
import { EncuestaPaciente } from '../src/encuesta_paciente/entities/encuesta_paciente.entity';
import { Entrada } from '../src/entradas/entities/entrada.entity';
import { Mensaje } from '../src/mensajes/entities/mensaje.entity';
import { OpcionesPregunta } from '../src/opciones_pregunta/entities/opciones_pregunta.entity';
import { Pregunta } from '../src/preguntas/entities/pregunta.entity';
import { Respuesta } from '../src/respuestas/entities/respuesta.entity';
import { TypePregunta } from '../src/type_pregunta/entities/type_pregunta.entity';
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
    TypeUserModule,
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
