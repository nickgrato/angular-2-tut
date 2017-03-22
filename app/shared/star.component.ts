import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import{ IProduct } from '../products/product';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
    //Constructor to inject dependencies. 
    constructor(private _productService : ProductService ){}
    
    //////////////
    // BINDINGS //
    //////////////
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
    @Input() rating: number;

    starWidth: number;
    products: IProduct[] = [];
    
    ngOninit(): void{
        
        
     }
    

    onClick(): void {
         this.ratingClicked.emit(`this is a message from gand child to container!!`);        
     }

    ngOnChanges() {
        this.starWidth = this.rating * 86/5;
     }

     

     

} 