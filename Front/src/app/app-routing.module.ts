import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HomeComponent } from './home/home.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AddTelaComponent } from './add-tela/add-tela.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminGuard } from './service/adminguard.guard';
import { AddprendasComponent } from './addprendas/addprendas.component';
import { HomeProdcutsComponent } from './home-prodcuts/home-prodcuts.component';
import { CarrosuelComponent } from './carrosuel/carrosuel.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },

  {path:'home',component:HomeScreenComponent  ,

  children: [


    {path:'telas', component: HomeComponent},

    { path: 'products', component: HomeProdcutsComponent }

  ]},



  {path:'admin',component:AdminscreenComponent,

  children: [

    {path: '', redirectTo: 'default', pathMatch: 'full' },

    {path: 'login',component:LoginAdminComponent},

    {path: 'default', component:AddTelaComponent,canActivate:[AdminGuard]},

    {path: 'addprendas', component:AddprendasComponent,canActivate:[AdminGuard]},

    {path: 'userinfo', component:UserinfoComponent,canActivate:[AdminGuard]},

  ]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
