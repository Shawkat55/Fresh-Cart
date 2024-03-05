import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogin:boolean=false;
  constructor(private _authS:AuthService , private _CartService:CartService ){}
  cartNummer:number=0;

  logOut(){
    this._authS.logOut()
  }
  ngOnInit(): void {
   this._authS.isLogin.subscribe((data)=>{
     this.islogin=data; 
   })

   this._CartService.cartNumber.subscribe({
    next:(data)=>{
      this.cartNummer=data
    }
   })
   this._CartService.getCartUser().subscribe({
    next:(respons)=>
    this.cartNummer=respons.numOfCartItems
   })
  }
}
