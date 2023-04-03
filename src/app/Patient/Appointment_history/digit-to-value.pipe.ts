import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitToValue'
})
export class DigitToValuePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: number): string {
   
    switch(value) {
      case 0:
        return 'Pending';
      case 1:
        return 'Accepted';
      case 2:
        return 'Approved';
      case 3:
        return 'Completed';
      case 4:
        return 'Rejected';
      default:
        return value.toString();
    }
  }

}
