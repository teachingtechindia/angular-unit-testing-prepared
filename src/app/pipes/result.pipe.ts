import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result',
})
export class ResultPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (!value || isNaN(value)) {
      return '';
    }

    if (value < 0) {
      return 'invalid value';
    } else if (value > 0 && value < 40) {
      return 'fail';
    } else {
      return 'pass';
    }
  }
}
