import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import {join} from "path"
import { Response } from 'express';
@Controller()
export class AngularController {
  constructor(private readonly appService: AppService) {}

}
