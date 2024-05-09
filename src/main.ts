import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { API_PREFIX } from './common/constants';
// import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.setGlobalPrefix(API_PREFIX);
   // app.enableVersioning({
   //    type: VersioningType.URI
   // defaultVersion: [AppModule.version, VERSION_NEUTRAL]
   // });
   console.log(AppModule.port);

   await app.listen(AppModule.port);
}
bootstrap();
