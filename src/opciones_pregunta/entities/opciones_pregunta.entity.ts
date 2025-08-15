import { Pregunta } from '../../preguntas/entities/pregunta.entity';
import { Respuesta } from '../../respuestas/entities/respuesta.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Opciones_pregunta')
export class OpcionesPregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto_opcion: string;

  @Column()
  valor: string;

  @ManyToOne(() => Pregunta, (pregunta_id) => pregunta_id.preguntas)
  opciones_pregunta: Pregunta;

  @OneToMany(() => Respuesta, (opciones_id) => opciones_id.respuesta_o)
  opciones_r: Respuesta;
}
