import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrosuel',
  templateUrl: './carrosuel.component.html',
  styleUrl: './carrosuel.component.css'
})
export class CarrosuelComponent {
constructor(private router : Router){

}
ropas(){
  document.getElementById("products")?.scrollIntoView({behavior:'smooth'})

this.router.navigate(["home/products"])


}
cards(){
document.getElementById("cartas")?.scrollIntoView({behavior:'smooth'})
this.router.navigate(["home/telas"])
}
}
