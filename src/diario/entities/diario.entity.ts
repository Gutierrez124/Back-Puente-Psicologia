import { Entrada } from '../../entradas/entities/entrada.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/user.entity';

@Entity('diario')
export class Diario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  color: string;

  @OneToMany(() => Entrada, (diario_id) => diario_id.entrada_di)
  diario_en: Entrada;

  @ManyToOne(() => User, (usuario_id) => usuario_id.user_di)
  diario_us: User;
}
