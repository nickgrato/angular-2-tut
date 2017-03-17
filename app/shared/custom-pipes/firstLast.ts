import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FirtLast'
})

export class FirstLastPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
    }
}