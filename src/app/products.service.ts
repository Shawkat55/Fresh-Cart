import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpclient:HttpClient) { }

  getCategroies():Observable<any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
  getCategroiesDetails(id:any):Observable<any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`)
  }
  getbrand():Observable<any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }
  getbrandDetails(id:any):Observable<any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${id}`)
  }
  getAllProducts(pageNumber:any = 1):Observable<any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/products?page=${pageNumber}`)

  }
  getproductsDetails(_id:any):Observable<any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/products/${_id}`)
  }
}
