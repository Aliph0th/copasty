import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Copaste {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   storage_url: string;

   @Column({
      default: 0
   })
   view_count: number;

   @Column()
   title: string;

   @Column({
      default: ''
   })
   description: string;

   @CreateDateColumn()
   created_at: Date;
}
