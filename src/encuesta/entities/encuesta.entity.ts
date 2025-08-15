import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EncuestaPaciente } from '../../encuesta_paciente/entities/encuesta_paciente.entity';

@Entity('encuesta')
export class Encuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @OneToMany(
    () => EncuestaPaciente,
    (encuesta_paciente) => encuesta_paciente.encuesta_pa,
  )
  encuesta: EncuestaPaciente;
}
