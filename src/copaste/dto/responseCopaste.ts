import { Exclude } from 'class-transformer';
import { Copaste } from '../copaste.entity';

export class ResponseCopasteDTO {
   id: number;

   @Exclude()
   signed_url: string;

   view_count: number;

   hash: string;

   title: string;

   @Exclude()
   file_id: string;

   description: string;

   @Exclude()
   url_expiration: Date;

   content: string;

   created_at: Date;

   constructor(partial: Partial<Copaste & { content: string }>) {
      Object.assign(this, partial);
   }
}
