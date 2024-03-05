import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { jwtDecode } from "jwt-decode";
import { Route, Router } from '@angular/router';







@Injectable({
  providedIn: 'root'
})
export class AuthService {
userDat = new BehaviorSubject(null);
isLogin = new BehaviorSubject(false);
  constructor(private _http:HttpClient , private _router :Router) {
    this.decodedToken()
   }
  signup(data: any):Observable<any>{
    return this._http.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , data)
  }
  decodedToken(){
    const encodedToken = localStorage.getItem('token')
    if(encodedToken){
      const decoded = jwtDecode(encodedToken);
      
      console.log(this.userDat);
      this.isLogin.next(true)      
    } 
    
  }
  login(data: any):Observable<any>{
    return this._http.post('https://route-ecommerce.onrender.com/api/v1/auth/signin' , data)
  }

  logOut (){
    localStorage.removeItem('token');
    this.isLogin.next(false);
    this.userDat.next(null);
    
    this._router.navigate(['/login'])
  }
}

