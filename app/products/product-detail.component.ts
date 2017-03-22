import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    selector: '',
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Prodict Detail';
    product: IProduct;

    //Constructor to inject dependencies.
    /* Note: we are setting a variable in this case _route to type ActivatedRoute
    it is vary similur are saying _route = new ActivateRoute  _route then has all
    of ActivatedRoute's methods available to it. */
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ){}

    ngOnInit() { 
       
        // id = _route "ActivatedRoute" snapshop of the parameter "id" -- // Object {id: "8"}
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`
    }

    onBack() :void {
        this._router.navigate(['/products']); 
    }
    
}  