import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'banksfilter'
})
export class BanksfilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    if (!filter) {
           return value;
       }
    return value.filter((item) => item.bank_name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
 }

}
