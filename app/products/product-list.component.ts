import{ Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ IProduct } from './product';
import{ ProductService } from './product.service';

@Component({
    templateUrl:`app/products/product-list.component.html`,
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit{

    //Constructor to inject dependencies. 
    constructor(private _productService : ProductService ){}
    
   //////////////
   // BINDINGS //
   //////////////
   @Output() onRatingClicked : EventEmitter<string> = new EventEmitter<string>();

   pageTitle: string = 'Product List';
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   listFilter: string = '';
   errorMessage: string;

   /*IProduct is an 'interface' object, basically it is a
    resource to make the object (in this case products) to be 
    stronly typed. So for example if we had productAge, it would show 
    and error because productAge is not of type IProduct.
    */
   products: IProduct[] = [];

   //TS does not requrire function key word
   toggleImage(): void {
       this.showImage = !this.showImage;
   }
   

   //Since ProductListComponent impliments ngOnInit we have to have an ngOnInit function
   // or we will get error "Property 'ngOnInit' is missing in type 'ProductListComponent'."
   ngOnInit(): void{
       this._productService.getProducts()
       //subscribe is just like then in promises
        .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
   }

   ratingClicked(message : string) :void{
       this.onRatingClicked.emit(message);
   }

   

}
