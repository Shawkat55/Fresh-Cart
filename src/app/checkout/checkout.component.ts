import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
constructor(private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService ){}

checkOut:FormGroup=this._FormBuilder.group({
  details:[''],
  phone:[''],
  city:[''],
})

checkId:any=''
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(param)=>{
      this.checkId=param.get('id')
      
    }
  })
}

handelform():void{
  console.log(this.checkOut.value);
  this._CartService.checkOut(this.checkId , this.checkOut.value ).subscribe({
    next:(response)=>{
      console.log(response);
      if (response.status == "success") {
        window.open(response.session.url)
      }
      
    }
  })
  
}

}
