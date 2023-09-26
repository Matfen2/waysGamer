import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective {
  constructor(private el: ElementRef) {
    this.opacity('0.7');
    this.scale('0.7');
  }

  private opacity(show: string) {
    this.el.nativeElement.style.opacity = show;
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.scale('1.0');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('0.7');
    this.scale('0.8');
  }
}
