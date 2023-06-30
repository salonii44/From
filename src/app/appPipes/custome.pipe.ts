import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custome'
})
export class CustomePipe implements PipeTransform {

nvalue=''
  transform(data: any,) : any {
if(data.length ===0){
  return ;data
}
this.nvalue=data.split("").reverse().join("");
return this.nvalue
}


}
