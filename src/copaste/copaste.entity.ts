import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Copaste {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   signed_url: string;

   @Column({
      default: 0
   })
   view_count: number;

   @Column({
      unique: true
   })
   hash: string;

   @Column({
      default: ''
   })
   title: string;

   @Column({
      unique: true
   })
   file_id: string;

   @Column({
      default: ''
   })
   description: string;

   @Column()
   url_expiration: Date;

   @CreateDateColumn()
   created_at: Date;
}
