import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelaApiService } from '../service/tela-api.service';

@Component({
  selector: 'app-home-prodcuts',
  templateUrl: './home-prodcuts.component.html',
  styleUrl: './home-prodcuts.component.css'
})
export class HomeProdcutsComponent implements OnInit {
  product : any = []
  constructor(public router :Router,public TelaService:TelaApiService){


  }
  go(imagelink:string){
    console.log(imagelink)
    this.router.navigate(['image/'+imagelink])
  }
  comprar(product :string ){
   const message = encodeURIComponent("Hola quisiera comprar " + product )
   const lik = `https://wa.me/+5355366583?text=${message}`;
   window.open(lik, '_blank');
  }

ngOnInit(): void {
 this.TelaService.getProducts().subscribe((data)=>{
  this.product = data;
  console.log(data)
 })
}

}
