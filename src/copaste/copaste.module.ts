import { Module } from '@nestjs/common';
import { CopasteController } from './copaste.controller';
import { CopasteService } from './copaste.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Copaste } from './copaste.entity';
import { HashModule } from '../hash/hash.module';
import { HttpModule } from '@nestjs/axios';

@Module({
   imports: [TypeOrmModule.forFeature([Copaste]), HashModule, HttpModule],
   controllers: [CopasteController],
   providers: [CopasteService]
})
export class CopasteModule {}
