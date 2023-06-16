import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1'
})
export class CustomPipe1Pipe implements PipeTransform {

  transform(n: number): string {
    return (n *1000).toFixed(2) + 'Kg';
  }

}
