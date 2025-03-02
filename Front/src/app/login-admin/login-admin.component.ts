import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaApiService } from '../service/tela-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  loginForm: FormGroup;

  constructor(private fb : FormBuilder ,private service : TelaApiService,private router : Router){
    this.loginForm = this.fb.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
onSubmit(){

  this.service.Login(this.loginForm.value.username,this.loginForm.value.password).subscribe((data)=>{

    if(data.token){

      localStorage.setItem("token",data.token);

      this.router.navigate(['/admin/default'])

    }

  })
}


}
