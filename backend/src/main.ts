import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join}from 'path'
import * as fs  from 'fs'
async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/cert/eltelar.cloudns.be-key.pem'),
    cert: fs.readFileSync('./src/cert/eltelar.cloudns.be-crt.pem'),
    ca:  fs.readFileSync('./src/cert/eltelar.cloudns.be-chain.pem'),
  };
  const app = await NestFactory.create(AppModule);

  const appdos = await NestFactory.create(AppModule,{httpsOptions});

  app.enableCors();


  await appdos.listen(443, () => console.log('Server running on https://localhost:443'));

  // Escucha en puerto 80 para HTTP
  await app.listen(80, () => console.log('Server running on http://localhost:80'));
}
bootstrap();
