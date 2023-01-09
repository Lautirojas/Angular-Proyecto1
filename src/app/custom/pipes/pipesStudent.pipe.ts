import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeStudent',
})
export class PipesPipe implements PipeTransform {
  transform(value: string, ...args: string[]): any {
    console.log(value);
    switch (args[0]) {
      case 'editar':
        value = 'Editar';
        console.log(value);
        break;
      case 'añadir':
        value = 'Añadir';
        console.log(value);
        break;
      default:
        console.log(value);
        break;
    }
    return value;
  }
}
