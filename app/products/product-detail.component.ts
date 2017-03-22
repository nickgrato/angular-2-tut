import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Prodict Detail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    //Constructor to inject dependencies.
    /* Note: we are setting a variable in this case _route to type ActivatedRoute
    it is vary similur are saying _route = new ActivateRoute  _route then has all
    of ActivatedRoute's methods available to it. */
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ){}

    ngOnInit() { 
        // id = _route "ActivatedRoute" snapshop of the parameter "id" -- // Object {id: "8"}
        

        //here we are listening "subscribing to" this get call.
        //
         this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
                
        });   


        
     }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
            
    }


    onBack() :void {
        this._router.navigate(['/products']); 
    }

     onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
    
}  