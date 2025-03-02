import { Entity, PrimaryGeneratedColumn, Column,IntegerType } from 'typeorm';

@Entity()
export class User {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({nullable: true})   
    admin: boolean;

}
