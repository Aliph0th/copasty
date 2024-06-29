import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { API_PREFIX } from './common/constants';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.setGlobalPrefix(API_PREFIX);
   app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: [AppModule.version]
   });
   await app.listen(AppModule.port);
}
bootstrap();
