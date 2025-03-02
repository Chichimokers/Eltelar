import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelaApiService {
  //url :string = "https://eltelar.cloudns.be"
  url :string = "http://localhost"

  constructor(private httpClient : HttpClient) { }
  geturl():string{
    return this.url;
  }
  Login(username :string ,password: string ):Observable<any>{

    return this.httpClient.post(this.url+"/auth/login",{username:username,password:password})

  }
 addProduct(formData :FormData): Observable<any> {
  return this.httpClient.post(this.url + "/products",formData);
 }
getuserinfo(){
  return  this.httpClient.get(this.url+"/userinfo")
}
getProducts(){
  return this.httpClient.get(this.url + "/products");
}
  addElement(formData :FormData):Observable<any>{
    return this.httpClient.post(this.url+"/telas", formData)
  }
  getTelas():Observable<any>{
    return this.httpClient.get(this.url+"/telas")
  }
  getoken(){
    return localStorage.getItem("token")
  }

  isLoggedIn():boolean{
    if(localStorage.getItem("token")){

      return true
    }else{
      return false
    }
  }
}
