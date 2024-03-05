import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService){}
cartDetails:any=null;

ngOnInit(): void {
  this._CartService.getCartUser().subscribe({
    next:(rsponse)=>{
      console.log(rsponse.data);
      
      this.cartDetails=rsponse.data;
      
    }
  })
}

removeItem(id:string):void{
  this._CartService.RemoveCartItem(id).subscribe({
    next:(rsponse)=>{
      console.log(rsponse);
      this.cartDetails=rsponse.data;
      this._CartService.cartNumber.next(rsponse.numOfCartItems)
    }
  })
}


changeCount(count:number , id:string):void{

  if(count >=1){
    this._CartService.updateCartCount(id , count).subscribe({
      next:(rsponse)=>{
        this.cartDetails=rsponse.data
      },
    
    })
  }else if(count <=0){
    this._CartService.RemoveCartItem(id).subscribe({
      next:(rsponse)=>{
        console.log(rsponse);
        this.cartDetails=rsponse.data;
        this._CartService.cartNumber.next(rsponse.numOfCartItems)
      }
    })
  }
}

clear():void{
  this._CartService.clearCart().subscribe({
    next:(respons)=>{
      console.log(respons); 
      if(respons.message=="success"){
        this.cartDetails=null
        this._CartService.cartNumber.next(0)
      }
    }
  })
}
}
