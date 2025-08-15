import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TypeUser } from '../type_user/entities/type_user.entity';
// import { Type } from '@nestjs/common';
import { Cita } from './../citas/entities/cita.entity';
import { Auditoria } from './../auditorias/entities/auditoria.entity';
import { EncuestaPaciente } from './../encuesta_paciente/entities/encuesta_paciente.entity';
import { Diario } from './../diario/entities/diario.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8 })
  dni: string;

  @Column()
  name: string;

  @Column()
  apellido: string;

  @Column()
  direccion: string;

  @Column({ length: 9 })
  telefono: string;

  @Column({ length: 7 })
  tel_fijo: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => TypeUser, (tipo_usuario) => tipo_usuario.usuario)
  tipo_usuario: TypeUser;

  @ManyToOne(() => User, (psicologo) => psicologo.pacientes, {
    onDelete: 'CASCADE',
  })
  psicologo: User; // Relación para asignar un psicólogo

  @OneToMany(() => User, (paciente) => paciente.psicologo)
  pacientes: User[]; // Relación para asignar múltiples pacientes

  @ManyToOne(() => Cita, (citaPaciente) => citaPaciente.paciente)
  citaPaciente: Cita;

  @ManyToOne(() => Cita, (citaPsicologo) => citaPsicologo.psicologo)
  citaPsicologo: Cita;

  @OneToMany(() => Auditoria, (auditoria) => auditoria.auditorias)
  auditoria: Auditoria;

  @OneToMany(() => EncuestaPaciente, (user_id) => user_id.encuestapa_us)
  user_en: EncuestaPaciente;

  @OneToMany(() => Diario, (user_id) => user_id.diario_us)
  user_di: Diario;
}
