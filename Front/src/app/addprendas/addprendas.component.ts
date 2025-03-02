import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaApiService } from '../service/tela-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprendas',
  templateUrl: './addprendas.component.html',
  styleUrl: './addprendas.component.css'
})
export class AddprendasComponent {
  itemForm: FormGroup;
  selectedFile: File | null = null;
  constructor(private fb: FormBuilder, private service:TelaApiService,private router :Router) {
    this.itemForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      moneda: ['', Validators.required],
      fechadeentrada: ['', Validators.required],
      tipo:['',Validators.required]
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
      formData.append('precio', this.itemForm.get('precio')?.value);
      formData.append('moneda', this.itemForm.get('moneda')?.value);
      formData.append('tipo', this.itemForm.get('tipo')?.value);
      formData.append('fechadeentrada', this.itemForm.get('fechadeentrada')?.value);
      formData.append('imagen', this.selectedFile, this.selectedFile.name);

      this.service.addProduct(formData).subscribe(
        (product) => {
          if (product) {

            this.router.navigate(['home/products']);

          }
        }
      );





  }
}
}
