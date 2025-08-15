import { Encuesta } from '../../encuesta/entities/encuesta.entity';
import { userInfo } from 'os';
import { Respuesta } from '../../respuestas/entities/respuesta.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/user.entity';

@Entity('encuesta_paciente')
export class EncuestaPaciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estado: string;

  @Column({ type: 'date' })
  fecha_asignada: Date;

  @ManyToOne(() => Encuesta, (encuesta_paciente) => encuesta_paciente.encuesta)
  encuesta_pa: Encuesta;

  @OneToMany(() => Respuesta, (encuestap_id) => encuestap_id.respuesta_en)
  encuesta_re: Respuesta;

  @ManyToOne(() => User, (user_id) => user_id.user_en)
  encuestapa_us: User;
}
