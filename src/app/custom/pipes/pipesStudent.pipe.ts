import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeStudent',
})
export class PipesPipe implements PipeTransform {
  transform(value: string, ...args: string[]): any {
    console.log({ 'args:': args });

    console.log(
      args.find((el) => el === 'editar')
        ? (value = 'Editar')
        : (value = 'Añadir')
    );

    return console.log({ 'value:': value });
  }
}
