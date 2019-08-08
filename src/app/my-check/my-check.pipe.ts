import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'check'})
export class CheckPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value === 'S' ? true : false;
  }
}
