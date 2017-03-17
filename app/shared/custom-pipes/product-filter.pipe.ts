import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../products/product';

@Pipe({
    name: 'productFilter'
})

export class productFilterPipe implements PipeTransform {
    
    transform(value: IProduct[], filterBy: string): IProduct[] {

        //THIS FILTER IS MORE JAVASCRIPT THEN ANGULAR SO DONT WORRY ABOUT IT.
        //is filter a value? if not set to null otherwise set to lowercase verion of it self.
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        //does filter have a value? if not return every list item
        // if filterBy has a value then filter value 
        return filterBy ? value.filter( 
            /*just compares the lowercase version of the name and the lowercase version of the value of filter. If the value is anywhere in 
            the name it will return a a number of the index. just making sure it isnt "-1",thats means it isnt in the string at all.*/
            (product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) != -1) 
            : value;
    }
}