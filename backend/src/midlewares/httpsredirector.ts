import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HttpToHttpsRedirect implements NestMiddleware {
 
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request",req.baseUrl," From",req.clientIp)
    // Verifica si la solicitud es segura (HTTPS)
    if (req.protocol === 'https') {
  
      const httpUrl = `http://${req.get('Host')}${req.url}`;
      // Redirige al usuario a la URL HTTPS
     return  res.redirect(httpUrl);
    } else {
      // Si la solicitud ya es HTTPS o está mapeada, simplemente avanza
      return next();
    }
  }

}
