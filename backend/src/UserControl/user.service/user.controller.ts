import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';

import { UserInfo } from '../user.entity';
import { UserServiceService } from '../user.service/user.service.service';

@Controller('userinfo')
export class UserController {

  constructor(private readonly userinforservice: UserServiceService) {}

  @Get()
  findAll(): Promise<UserInfo[]> {
    return this.userinforservice.findAll();
  }


}
