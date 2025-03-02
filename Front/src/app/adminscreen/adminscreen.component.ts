import { Component } from '@angular/core';
import { TelaApiService } from '../service/tela-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrl: './adminscreen.component.css'
})
export class AdminscreenComponent {
  constructor(public service: TelaApiService,public router:Router){

  }

}
