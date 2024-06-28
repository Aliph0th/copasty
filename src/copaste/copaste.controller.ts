import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CopasteService } from './copaste.service';
import { CreateCopasteDTO } from './copaste.dto';

@Controller('copastes')
export class CopasteController {
   constructor(private readonly copasteService: CopasteService) {}

   @Post()
   async create(@Body(ValidationPipe) createCopasteDTO: CreateCopasteDTO) {
      return await this.copasteService.create(createCopasteDTO);
   }
}
