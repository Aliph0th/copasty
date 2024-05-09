import { Body, Controller, Get, Post } from '@nestjs/common';
import { CopasteService } from './copaste.service';

@Controller('copastes')
export class CopasteController {
   constructor(private readonly copasteService: CopasteService) {}

   @Get()
   async getAll() {
      return await this.copasteService.findAll();
   }

   @Post()
   async create(@Body('text') text: string) {
      await this.copasteService.create(text);
      return 'success';
   }
}
