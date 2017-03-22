import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//routing
import { BrowserModule } from '@angular/platform-browser';// ex ngIf
import { FormsModule } from '@angular/forms';//example ng-model
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

import { ProductListComponent }  from './products/product-list.component';
import { ProductDetailComponent }  from './products/product-detail.component';
import { FirstLastPipe } from './shared/custom-pipes/firstLast';
import { productFilterPipe } from './shared/custom-pipes/product-filter.pipe';
import { StarComponent } from './shared/star.component'

 
 
/*
IMPORTS - External modules we want available to this module "BrowserModule".
DECLATATIONS - These are all the components that we want in this module.
BOOTSTRAP - The root component for the app - AppComponent
*/

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },  // typically for 404 page    
    ]) 
    ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    FirstLastPipe,
    productFilterPipe,
    StarComponent 
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
