import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//example ng-model


import { ProductListComponent }  from './product-list.component';
import { ProductDetailComponent }  from './product-detail.component';
import { productFilterPipe } from '../shared/custom-pipes/product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';


import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
        ])
    ],
    exports: [],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        productFilterPipe 
    ],
    providers: [ ProductDetailGuard, ProductService],
})
export class ProductModule { }
