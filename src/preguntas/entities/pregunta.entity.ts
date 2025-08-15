import { OpcionesPregunta } from '../../opciones_pregunta/entities/opciones_pregunta.entity';
import { Respuesta } from '../../respuestas/entities/respuesta.entity';
import { TypePregunta } from '../../type_pregunta/entities/type_pregunta.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pregunta')
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @ManyToOne(() => TypePregunta, (tipo_pregunta) => tipo_pregunta.pregunta)
  tipo_pregunta: TypePregunta;

  @OneToMany(
    () => OpcionesPregunta,
    (pregunta_id) => pregunta_id.opciones_pregunta,
  )
  preguntas: OpcionesPregunta;

  @OneToMany(() => Respuesta, (pregunta_id) => pregunta_id.respuesta)
  preguntas_r: Respuesta;
}
