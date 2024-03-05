import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { WhishlistService } from '../whishlist.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  constructor(private _ProductsService:ProductsService , private _CartService:CartService ,private _ToastrService:ToastrService ,private _WhishlistService:WhishlistService){}
products:any[]=[]
wishListData:any[]=[]
Categroies:any[]=[]
search:any=''
categoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

ngOnInit(): void {
  this._ProductsService.getAllProducts().subscribe({
    next:(respons)=>{
      this.products=respons.data
    }
  })

  this._WhishlistService.getWhishList().subscribe({
    next:(response)=>{
      const newData=response.data.map((item:any)=> item._id)
      this.wishListData = newData;
      
    }

  })

  this._ProductsService.getCategroies().subscribe({
    next:(respons)=>{
      this.Categroies=respons.data
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
 


}

