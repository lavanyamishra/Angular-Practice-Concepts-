import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'limitWord',
})
export class LimitWordPipe implements PipeTransform {
  transform(value: any, limit:any = null, symbol:any = null, ...args: any[]): any {
    let limitChar = limit != null ? limit : 10;
    let newSymbol = symbol != null ? symbol : '.....';

    return value.length > limitChar ? value.slice(0, limitChar) + newSymbol : value;
  }
}
