import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'touppercase'
})
export class TouppercasePipe implements PipeTransform {

  transform(valor: any): any {
    if (typeof valor === 'string') {
      return valor.toUpperCase();
    }
    return valor;
  }

}
