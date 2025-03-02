import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TelaApiService } from '../service/tela-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tela',
  templateUrl: './add-tela.component.html',
  styleUrl: './add-tela.component.css'
})
export class AddTelaComponent {
  itemForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private service:TelaApiService,private router :Router) {
    this.itemForm = this.fb.group({
      nombre: ['', Validators.required],
      precioPorMetro: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      color: ['', Validators.required],
      moneda: ['', Validators.required],
      fechadeentrada: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]; // Captura el archivo seleccionado
  }
  gee(){
    //calculate day  of week

  }

  onSubmit(): void {

    if (this.itemForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('nombre', this.itemForm.get('nombre')?.value);
      formData.append('precioPorMetro', this.itemForm.get('precioPorMetro')?.value);
      formData.append('color', this.itemForm.get('color')?.value);
      formData.append('moneda', this.itemForm.get('moneda')?.value);
      formData.append('fechadeentrada', this.itemForm.get('fechadeentrada')?.value);
      formData.append('imagen', this.selectedFile, this.selectedFile.name);

      this.service.addElement(formData).subscribe(
        (elemnt)=>{
          if(elemnt){

            this.router.navigate(['home/default'])

          }

      }
    )
  }
}
}
