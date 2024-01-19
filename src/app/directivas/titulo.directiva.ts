import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[tituloGrande]'
})
export class TituloGrande implements OnInit {
  constructor(private elemento: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Verificar si es un elemento h1
    if (this.elemento.nativeElement.tagName.toLowerCase() === 'h1') {
      // Aplicar el estilo de letra grande
      this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    }
  }
}
