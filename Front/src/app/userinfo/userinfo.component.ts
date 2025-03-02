import { Component, OnInit } from '@angular/core';
import { TelaApiService } from '../service/tela-api.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {
  Datos: any= [];
  da:object = {id:1};
  constructor(public telaservice : TelaApiService){}
  ngOnInit(): void {
    this.telaservice.getuserinfo().subscribe((data)=>{
      this.Datos = data;
      console.log(this.Datos)
    })



  }

}
