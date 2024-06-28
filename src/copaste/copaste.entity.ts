import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Syntaxes } from '../common/constants';

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

   @Column({
      type: 'enum',
      enum: Syntaxes,
      default: Syntaxes.plaintext
   })
   syntax: Syntaxes;

   @CreateDateColumn()
   created_at: Date;
}
