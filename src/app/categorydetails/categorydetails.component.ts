import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
categoryId:string|null='';

categoryDetails:any={}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(param)=>{
      this.categoryId=param.get('id')

    }
  })
  this._ProductsService.getCategroiesDetails(this.categoryId).subscribe({
    next:(response)=>{
      console.log(response);
      this.categoryDetails=response.data
      
    }
  })
}
}
