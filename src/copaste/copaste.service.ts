import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Copaste } from './copaste.entity';
import { Repository } from 'typeorm';
import { StorageService } from '../storage/storage.service';
import { CreateCopasteDTO } from './copaste.dto';
import { Syntaxes } from '../common/constants';

@Injectable()
export class CopasteService {
   constructor(
      @InjectRepository(Copaste) private readonly copasteRepo: Repository<Copaste>,
      private readonly storageService: StorageService
   ) {}

   async findAll() {
      return this.copasteRepo.find();
   }

   async create(dto: CreateCopasteDTO) {
      const { uuid, url, expirationDate } = await this.storageService.save(dto.content);
      const copaste = this.copasteRepo.create({
         file_id: uuid,
         signed_url: url,
         title: dto.title || '',
         description: dto.description || '',
         url_expiration: expirationDate,
         syntax: dto.syntax || Syntaxes.plaintext
      });
      await this.copasteRepo.save(copaste);
   }
}
