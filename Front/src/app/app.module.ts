import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaApiService } from './service/tela-api.service';
import { FooterComponent } from './footer/footer.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AddTelaComponent } from './add-tela/add-tela.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptor } from './service/auth.httpinterceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarrosuelComponent } from './carrosuel/carrosuel.component';
import { AddprendasComponent } from './addprendas/addprendas.component';
import { HomeProdcutsComponent } from './home-prodcuts/home-prodcuts.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminscreenComponent,
    AddTelaComponent,
    LoginAdminComponent,
    CarrosuelComponent,
    AddprendasComponent,
    HomeProdcutsComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],

  providers:  [
    TelaApiService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

      {
        provide: JWT_OPTIONS,
         useValue: JWT_OPTIONS

        }


],
  bootstrap: [AppComponent]
})
export class AppModule { }
