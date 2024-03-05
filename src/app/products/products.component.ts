import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from '../whishlist.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
constructor(private _ProductsService:ProductsService ,private _WhishlistService:WhishlistService , private _CartService:CartService , private _ToastrService:ToastrService  ){}
products:any[]=[]
pageSize:any=0;
p:any=0;
total:number=0;
wishListData:any[]=[]
ngOnInit(): void {
  this._ProductsService.getAllProducts().subscribe({
    next:(respons)=>{
      this.products=respons.data;
      this.pageSize=respons.metadata.limit;
      this.p=respons.metadata.currentPage;
      this.total=respons.results
    }
  })
}
addProduct(id:any):void{
  this._CartService.addToCard(id).subscribe({
    next:(rsponse)=>{
      console.log(rsponse);
      this._CartService.cartNumber.next(rsponse.numOfCartItems)
      this._ToastrService.success(rsponse.message)
    }
  })
  }
  addHeart(prodId:string):void{
    this._WhishlistService.addToWhishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this.wishListData=response.data
        this._ToastrService.success(response.message)
      }
    })
  }
  removeHeart(prodId:any):void{
    this._WhishlistService.removeWhishList(prodId).subscribe({
      next:(rsponse)=>{
        console.log(rsponse);
        this.wishListData=rsponse.data
        
      }
    })
  }


  pageChanged(event:any):void{
    console.log(event);
    this._ProductsService.getAllProducts(event).subscribe({
      next:(respons)=>{
        this.products=respons.data;
        this.pageSize=respons.metadata.limit;
        this.p=respons.metadata.currentPage;
        this.total=respons.results
      }
    })
    
  }
}
