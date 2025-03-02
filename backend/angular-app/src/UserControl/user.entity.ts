import { Entity, PrimaryGeneratedColumn, Column,IntegerType } from 'typeorm';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fecha: string;
  @Column()
  hora: string;
  @Column()
  IP: string;

  @Column({nullable: true})
  MAC: string; // Precio por metro


}
