import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {

  @Input() isCorrect : Boolean = false ;
  constructor(private el : ElementRef, private render : Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
     this.render.setStyle(this.el.nativeElement, 'background-color', 'green');
     this.render.setStyle(this.el.nativeElement, 'color', '#fff');
    }else{
      this.render.setStyle(this.el.nativeElement, 'background-color', 'red');
      this.render.setStyle(this.el.nativeElement, 'color', 'white');
    }
  }
}
