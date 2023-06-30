import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false

})
export class FilterPipe implements PipeTransform {

  transform(value: any,SearchTerm:any): any {
    if(value.length === 0){
      return value;
    }
    return value.filter(function(search:any){

      return search.name.toLowerCase().indexOf(SearchTerm.toLowerCase()) > -1;
    })
  }


}
