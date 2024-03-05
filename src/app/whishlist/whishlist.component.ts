import { Component, OnInit } from '@angular/core';
import { WhishlistService } from '../whishlist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  constructor(private _WhishlistService:WhishlistService , private _CartService:CartService){}
  products:any[]=[]
  ngOnInit(): void {
    this._WhishlistService.getWhishList().subscribe({
      next:(response)=>{
        this.products=response.data        
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

  addheart(prodId:string):void{
    this._WhishlistService.addToWhishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
  }
  removeheart(prodId:any):void{
    this._WhishlistService.removeWhishList(prodId).subscribe({
      next:(rsponse)=>{
        console.log(rsponse);
        this._WhishlistService.getWhishList().subscribe({
          next:(respons)=>{
            this.products=respons.data
          }
        })
      }
    })
  }
}
