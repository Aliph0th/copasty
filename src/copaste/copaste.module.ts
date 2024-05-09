import { Module } from '@nestjs/common';
import { CopasteController } from './copaste.controller';
import { CopasteService } from './copaste.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Copaste } from './copaste.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Copaste])],
   controllers: [CopasteController],
   providers: [CopasteService]
})
export class CopasteModule {}
