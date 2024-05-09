import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Copaste } from './copaste.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CopasteService {
   constructor(
      @InjectRepository(Copaste) private readonly copasteRepo: Repository<Copaste>
   ) {}

   async findAll() {
      return this.copasteRepo.find();
   }

   async create(text: string) {}
}
