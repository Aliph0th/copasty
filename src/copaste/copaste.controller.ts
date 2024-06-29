import {
   Body,
   ClassSerializerInterceptor,
   Controller,
   Get,
   Post,
   UseInterceptors,
   ValidationPipe
} from '@nestjs/common';
import { CopasteService } from './copaste.service';
import { CreateCopasteDTO } from './dto/createCopaste';
import { GetCopasteDTO } from './dto/getCopaste';

@Controller('copaste')
export class CopasteController {
   constructor(private readonly copasteService: CopasteService) {}

   @Post()
   async create(@Body(ValidationPipe) createCopasteDTO: CreateCopasteDTO) {
      return await this.copasteService.createCopaste(createCopasteDTO);
   }

   @UseInterceptors(ClassSerializerInterceptor)
   @Get()
   async get(@Body(ValidationPipe) getCopasteDTO: GetCopasteDTO) {
      return await this.copasteService.getCopaste(getCopasteDTO);
   }
}
