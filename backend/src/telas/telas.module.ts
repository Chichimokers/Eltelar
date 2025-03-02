import { Module } from '@nestjs/common';
import { TelaService } from './tela/tela.service';
import { TelaController } from './tela/tela.controller';
import { Tela } from './tela/tela.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({

  imports:[ 
    ServeStaticModule.forRoot(
    {
      rootPath: './images', // Ruta donde se encuentran las imágenes
      serveRoot: '/images/', // URL base para acceder a las imágenes
    }),

    TypeOrmModule.forFeature([Tela])],
  providers: [TelaService],
  controllers: [TelaController]

})

export class TelasModule {}
