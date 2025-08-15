import { EncuestaPaciente } from '../../encuesta_paciente/entities/encuesta_paciente.entity';
import { OpcionesPregunta } from '../../opciones_pregunta/entities/opciones_pregunta.entity';
import { Pregunta } from '../../preguntas/entities/pregunta.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('respuestas')
export class Respuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto_respuesta: string;

  @Column()
  valor_scala: string;

  @ManyToOne(() => Pregunta, (pregunta_id) => pregunta_id.preguntas_r)
  respuesta: Respuesta;

  @ManyToOne(() => OpcionesPregunta, (opcioines_id) => opcioines_id.opciones_r)
  respuesta_o: OpcionesPregunta;

  @ManyToOne(() => EncuestaPaciente, (encuestap_id) => encuestap_id.encuesta_re)
  respuesta_en;
}
