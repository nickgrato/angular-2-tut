import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(
        private _router: Router
    ) {}


    /* NOTE:
    Routing guard can be used for a lot of things from routing errors to
    validation. We can use tokens to allow users into sertant routes. We can also
    use routing guards for modal confirmations. We can also use this to perload data to a route. 
    */
    canActivate(route: ActivatedRouteSnapshot): boolean {
       var answer = confirm("Are you sure you want to go to this product");

        if (answer){
            return true;
        }
        else{
           return false;
        }
    }
}