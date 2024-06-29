import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Copaste } from './copaste.entity';
import { Repository } from 'typeorm';
import { StorageService } from '../storage/storage.service';
import { HashService } from '../hash/hash.service';
import { CreateCopasteDTO } from './dto/createCopaste';
import { GetCopasteDTO } from './dto/getCopaste';
// import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { ResponseCopasteDTO } from './dto/responseCopaste';

@Injectable()
export class CopasteService {
   constructor(
      @InjectRepository(Copaste) private readonly copasteRepo: Repository<Copaste>,
      private readonly storageService: StorageService,
      private readonly hashService: HashService
      // private readonly httpService: HttpService
   ) {}

   async getCopaste({ hash }: GetCopasteDTO) {
      const copaste = await this.copasteRepo.findOne({ where: { hash } });
      if (!copaste) {
         throw new NotFoundException([`hash ${hash} not found`]);
      }
      if (copaste.url_expiration < new Date()) {
         const { expirationDate, url } = await this.storageService.signUrl(
            copaste.file_id
         );
         copaste.url_expiration = expirationDate;
         copaste.signed_url = url;
         await this.copasteRepo.save(copaste);
      }
      const content = (await axios.get<string>(copaste.signed_url)).data;
      return new ResponseCopasteDTO({ ...copaste, content });
   }

   async createCopaste(dto: CreateCopasteDTO) {
      const { uuid, url, expirationDate } = await this.storageService.save(dto.content);
      const copaste = this.copasteRepo.create({
         file_id: uuid,
         signed_url: url,
         title: dto.title || '',
         description: dto.description || '',
         url_expiration: expirationDate,
         hash: this.hashService.generate()
      });
      await this.copasteRepo.save(copaste);
      return { hash: copaste.hash };
   }
}
