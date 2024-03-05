import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  CategoriesData:any[]=[]

  ngOnInit(): void {
    this._ProductsService.getCategroies().subscribe({
      next:(response)=>{
        console.log(response);
        this.CategoriesData=response.data
        
      }
    })
  }

}
