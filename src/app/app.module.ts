import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopasteModule } from '../copaste/copaste.module';
import { ormOptions } from '../orm.config';
import { StorageModule } from '../storage/storage.module';

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true
      }),
      TypeOrmModule.forRoot(ormOptions),
      StorageModule.forRootAsync({
         imports: [ConfigModule],
         isGlobal: true,
         useFactory(configService: ConfigService) {
            return {
               projectId: configService.getOrThrow('FB_PROJECT_ID'),
               storageBucket: configService.getOrThrow('FB_BUCKET'),
               privateKey: configService
                  .getOrThrow('FB_SIGNED_KEY')
                  .replace(/\\n/g, '\n'),
               clientEmail: configService.getOrThrow('FB_SERVICE_EMAIL')
            };
         },
         inject: [ConfigService]
      }),
      CopasteModule
   ],
   controllers: [AppController],
   providers: [AppService]
})
export class AppModule {
   static port: number | string;
   static version: string;

   constructor(private readonly configService: ConfigService) {
      AppModule.port = configService.getOrThrow('PORT');
      AppModule.version = configService.getOrThrow('VERSION');
   }
}
