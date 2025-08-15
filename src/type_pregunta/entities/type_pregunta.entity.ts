import { Pregunta } from '../../preguntas/entities/pregunta.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_pregunta')
export class TypePregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Pregunta, (pregunta) => pregunta.tipo_pregunta)
  pregunta: Pregunta;
}
