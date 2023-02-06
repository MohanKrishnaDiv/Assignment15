import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplePipe'
})
export class SamplePipePipe implements PipeTransform {
  value:string="";
  transform(value: string, ...args: unknown[]): any {
    this.value= value.split("").reverse().join("");
    return this.value
  
  }
}
