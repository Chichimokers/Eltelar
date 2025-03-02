import { Component, OnInit } from '@angular/core';
import { TelaApiService } from '../service/tela-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  Telas : any = []
  constructor(public router :Router,public TelaService:TelaApiService){


  }
  go(imagelink:string){
    console.log(imagelink)
    this.router.navigate(['image/'+imagelink])
  }
  comprar(tela:string ){
   const message = encodeURIComponent("Hola quisiera comprar " + tela )
   const lik = `https://wa.me/+5355366583?text=${message}`;
   window.open(lik, '_blank');
  }
  ngOnInit():void{
    this.TelaService.getTelas().subscribe((datos)=>{
      this.Telas = datos;

      this.Telas.forEach((tela: any) =>{
        const url = tela.imagenUrl;


       tela.imagenUrl =   url.split("\\")[1];

      } )

    })
  }

}
