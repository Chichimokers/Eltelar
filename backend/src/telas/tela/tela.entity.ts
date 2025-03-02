import { Entity, PrimaryGeneratedColumn, Column,IntegerType } from 'typeorm';

@Entity()
export class Tela {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioPorMetro: IntegerType; // Precio por metro

  @Column()
  color: string; 

  @Column({nullable:true})
  moneda: string;

  @Column({nullable:true})
  imagenUrl: string;

  @Column({nullable: true})   
    fechadeentrada: string;

}
