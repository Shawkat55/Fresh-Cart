import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private _HttpClient:HttpClient){ }
  baseUrl:string=` https://route-ecommerce.onrender.com/api/v1/auth/`;



  forgotPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'forgotPasswords' , userEmail )
  }


  resetCode(resetCode:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'verifyResetCode' ,resetCode)
  }


  resetPassword(resetPassword:object):Observable<any>{
    return this._HttpClient.put(this.baseUrl + 'resetPassword' , resetPassword)
  }
}
