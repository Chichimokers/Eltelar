import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { UserServiceService } from './user.service.service';

@Injectable()
export class UserInfoMiddleware implements NestMiddleware {
  constructor(private userInfoService: UserServiceService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip;
    const mac = req.headers['x-forwarded-for'] || ''; // Obtener la dirección MAC, si está disponible
    this.userInfoService.saveUserIpAndMac(ip,mac.toString());
    next();
  }
}