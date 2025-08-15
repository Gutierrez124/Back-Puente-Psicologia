import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../../user/user.entity';

@Entity()
export class TypeUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => User, (user) => user.tipo_usuario)
  usuario: User[];
}
