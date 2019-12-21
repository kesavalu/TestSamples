import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkIsNull'
})
export class CheckIsNullPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value != null && typeof value !== 'undefined' ? value : "";
  }
}
