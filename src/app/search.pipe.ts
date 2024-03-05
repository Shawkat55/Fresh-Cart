import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[] , text:any): any[] {
    return products.filter( (item)=> item.title.toLowerCase().includes(text.toLowerCase()) )
  }

}
