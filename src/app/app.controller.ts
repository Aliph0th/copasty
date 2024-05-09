import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ROUTES } from '../common/constants';

@Controller()
export class AppController {
   constructor(private readonly appService: AppService) {}

   @Get(ROUTES.HELLO)
   async getHello() {
      return await this.appService.getHello();
   }
}
