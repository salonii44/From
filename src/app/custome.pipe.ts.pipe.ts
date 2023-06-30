import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipeTs'
})
export class CustomePipeTsPipe implements PipeTransform {

  nvalue=''
  transform(value: any, ): any {
if(!value)   return value
if(typeof(value) === 'string'){
return  value.toUpperCase;
}
this.nvalue=value.split("").reverse().join("");
return this.nvalue;

  }
}
