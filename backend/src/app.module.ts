import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TelasModule } from './telas/telas.module';
import { AuthModule } from './auth/auth.module';
import { AngularController } from './angular.controller';
import { HttpToHttpsRedirect } from './midlewares/httpsredirector';
import { UserInfoMiddleware } from './UserControl/user.service/user.service.middleware';
import { UserServiceService } from './UserControl/user.service/user.service.service';
import { UserInfo } from './UserControl/user.entity';
import { HttpModule } from '@nestjs/axios';
import { Product } from './Products/Product.entity';
import { ProductsService } from './Products/products/products.service';
import { ProductsController } from './Products/products/products.controller';
import { UserController } from './UserControl/user.service/user.controller';


@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([UserInfo,Product]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../angular-app'), // Ajusta esto al nombre de tu carpeta
    }),

    TypeOrmModule.forRoot({

    type: 'postgres',
    host: 'localhost',
    port: 3306,
    username: 'postgres',  // Cambia esto por tu usuario de PostgreSQL
    password: '123',       // Cambia esto por tu contraseña de PostgreSQL
    database: 'Telas',    // Cambia esto por el nombre de tu base de datos
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,    // Solo para desarrollo

  }),TelasModule, AuthModule],

  controllers: [AppController,AngularController,ProductsController,UserController],
  providers: [AppService,UserServiceService,UserInfoMiddleware,ProductsService],
})
export class AppModule {
   configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpToHttpsRedirect)
      .forRoutes('*');
   // consumer.apply(UserInfoMiddleware).forRoutes('*') // Aplica para todas las rutas
  }
}
