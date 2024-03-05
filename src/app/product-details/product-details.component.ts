import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService ,private _CartService:CartService ){}
  productDetails:any;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        let idProduct:any=param.get('id');

        this._ProductsService.getproductsDetails(idProduct).subscribe({
          next:(response)=>{
            this.productDetails=response.data;
          }
        })
      }
    })
  }


  addProduct(id:any):void{
    this._CartService.addToCard(id).subscribe({
      next:(rsponse)=>{
        console.log(rsponse);
        this._CartService.cartNumber.next(rsponse.numOfCartItems)
      }
    })
    }
  }
  
