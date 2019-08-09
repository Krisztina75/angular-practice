import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(baseArray: any[], key: string = '', direction: number = 1): any {    //ahol a key majd az az oszop lesz, amiben keresünk
    if (key === '') {
      return baseArray;
    }
    baseArray.sort((a, b) => {
      if (typeof a[key] === 'number') {
        return (a[key] - b[key]) * direction;
      } else {
        return (a[key].toString() as string).localeCompare(b[key].toString()) * direction;
      }
    });
    return baseArray;
  }

}
