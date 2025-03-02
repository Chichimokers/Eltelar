import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {  UserInfo } from '../user.entity';

@Injectable()
export class UserServiceService {
    constructor(
        @InjectRepository(UserInfo)
        private readonly userunforepo: Repository<UserInfo>,
        private httpclient : HttpService
      ) {}
      async getCountry(ip:string): Promise<string> {
        return new Promise((resolve,reject)=>{
          const url  = "http://api.country.is/"+ip
      
          this.httpclient.get(url).subscribe((data)=>{
           resolve(data.data.country)
           })

        })
     
      

      }
      async findAll(): Promise<UserInfo[]> {
        return this.userunforepo.find();
      }
      async saveUserIpAndMac(ip: string, mac: string) {

        const nuevaTela = this.userunforepo.create({
          fecha: new Date().toISOString(),
          hora: new Date().toLocaleTimeString(),
          IP: ip,
          MAC: await this.getCountry(ip.split(":")[1]),
        });
    
        await this.userunforepo.save(nuevaTela);
      }

}
