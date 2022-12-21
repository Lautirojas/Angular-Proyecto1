import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectives]',
})
export class DirectivesDirective implements OnInit {
  constructor(private elemento: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
  }
}
