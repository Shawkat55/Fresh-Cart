import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
baseUrl:string=` https://route-ecommerce.onrender.com/api/v1/`
  constructor(private _HttpClient:HttpClient) { }

  myToken:any={
    token:localStorage.getItem('token')
  }
  addToWhishList(prodId:any):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `wishlist` , 
    {
      productId:prodId
    },
    {
      headers:this.myToken
    }

    )
    
  }
  getWhishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'wishlist' ,
    {
      headers:this.myToken
    }
    )
  }

  removeWhishList(prodId:any):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}` ,
    {
      headers:this.myToken
    }
    )
  }
  
}
