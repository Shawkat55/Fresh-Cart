import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {


  constructor(private _HttpClient:HttpClient , private _Router:Router){}
  cartNumber: BehaviorSubject<number>=new BehaviorSubject(0)

  myToken:any={
    token:localStorage.getItem('token')
  }


  addToCard(prodId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart` , 
    {
      productId:prodId
    },
    {
      headers:this.myToken
    }

    )

  }

  getCartUser():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart` , {
      headers:this.myToken
    })
  }

  RemoveCartItem(prodId:string):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${prodId}` , {
      headers:this.myToken
    })
  }
  

  updateCartCount(prodId:string , countNumber:number):Observable<any>{
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${prodId}` , 
    
    {
      count : countNumber
    },
    {
      headers:this.myToken
    }
    
    ) 
  }


  clearCart():Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart` , {
      headers:this.myToken
    })
  }


  checkOut(checkId:any , Data:any):Observable<any>{
    let baseUrl = window.location.host
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${checkId}?url=http://${baseUrl}`,
    {
      "shippingAddress": Data
  },
  {
    headers:this.myToken
  }
    )
  }
}
