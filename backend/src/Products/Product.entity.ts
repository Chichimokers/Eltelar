//generame una entidad de nest llamada producto y ponmele estos atributso precio imagenurl fechadentrada nombre  mondea
import { Entity, PrimaryGeneratedColumn, Column,IntegerType } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: IntegerType; // Precio por metro

  @Column()
  tipo: string; 

  @Column({nullable:true})
  moneda: string;

  @Column({nullable:true})
  imagenUrl: string;

  @Column({nullable: true})   
    fechadeentrada: string;

}
