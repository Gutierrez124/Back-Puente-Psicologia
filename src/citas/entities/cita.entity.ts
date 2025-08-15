import { TypeUser } from 'type_user/entities/type_user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/user.entity';

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'time' })
  hora_inicio: string;

  @Column({ type: 'time' })
  hora_fin: string;

  @Column({ type: 'enum', enum: ['Virtual', 'Presencial'] })
  tipo: 'Virtual' | 'Presencial';

  @Column({ default: 'Pendiente' })
  estado: string;

  @Column({ type: 'text', nullable: true })
  notas: string;

  @Column({ type: 'varchar', length: 255 })
  link_videollamada: string;

  @Column({ type: 'varchar', nullable: true })
  ubicacion: string;

  @Column({ type: 'text', nullable: true })
  comentarios: string;

  @ManyToOne(() => User, (user) => user.citaPaciente, { onDelete: 'CASCADE' })
  paciente: User; // Relación con el paciente (tabla User)

  @ManyToOne(() => User, (user) => user.citaPsicologo, { onDelete: 'CASCADE' })
  psicologo: User; // Relación con el psicólogo (tabla User)
}
