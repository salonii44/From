import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomeStyleDirectiveTs]'
})
export class CustomeStyleDirectiveTsDirective {

  constructor(private val:ElementRef) {
    val.nativeElement.style.color='red';

  }
    @HostListener('mouseenter') OnMouseEnter(){

      this.val.nativeElement.style.color='green';
      this.val.nativeElement.innerHTML='This is Custome Property'

   }
   

}
