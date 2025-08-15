import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/user.entity';

@Entity('auditorias')
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo_actividad: string;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'time' })
  hora: string;

  @ManyToOne(() => User, (auditoria) => auditoria.auditoria)
  auditorias: User;
}
