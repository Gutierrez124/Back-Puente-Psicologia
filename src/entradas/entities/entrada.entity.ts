import { Diario } from '../../diario/entities/diario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entrada')
export class Entrada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contenido: string;

  @Column({ type: 'date' })
  fecha: Date;

  @ManyToOne(() => Diario, (diario_id) => diario_id.diario_en)
  entrada_di: Diario;
}
