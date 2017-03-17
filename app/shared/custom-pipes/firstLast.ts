import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    //Name of the pipe when used in the html template.
    name: 'FirstLast'
})

export class FirstLastPipe implements PipeTransform {
    /*
      value - value coming in   
      args - argument(s) coming in 
      : return value
    */
    transform(value: any, args: any[]): any {
        console.log(value);
        return 'C.P. @ work - '+ value;
    }
}