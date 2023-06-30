import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {


  constructor(private el:ElementRef,
     private renderer : Renderer2
    ) {

    el.nativeElement.style.color='red';
}



@HostListener('mouseover') myMouseOver(){
  this.renderer.setStyle(this.el.nativeElement,'background', 'green')
}

@HostListener('mouseleave') myMouseLeave(){
  this.renderer.setStyle(this.el.nativeElement,'background', 'yellow')
}



}
