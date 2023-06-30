import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipeTs'
})
export class CurrencyPipeTsPipe implements PipeTransform {

  transform(value: number,mutiplier:number ): number {
    return value * value;
  }



}
