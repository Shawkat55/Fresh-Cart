import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-branddetails',
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.css']
})
export class BranddetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  brandId:string|null='';
  
  brandDetails:any={}
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.brandId=param.get('id')
  
      }
    })
    this._ProductsService.getbrandDetails(this.brandId).subscribe({
      next:(response)=>{
        console.log(response);
        this.brandDetails=response.data
        
        
        
      }
    })
  }
}
