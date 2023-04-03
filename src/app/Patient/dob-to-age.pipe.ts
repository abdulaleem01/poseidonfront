import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dobToAge',
})
export class DobToAgePipe implements PipeTransform {
  transform(value: string): string {
    // const d=moment(value, "DD/MM/YYYY");

    var today = new Date();
    // console.log(d);

    var birthDate = new Date(value);
    console.log(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age.toString();
  }
}
