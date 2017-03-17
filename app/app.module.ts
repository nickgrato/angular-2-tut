import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';// ex ngIf
import { FormsModule } from '@angular/forms';//example ng-model

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';

import { FirstLastPipe } from './shared/custom-pipes/firstLast';
 
 
/*
IMPORTS - External modules we want available to this module "BrowserModule".
DECLATATIONS - These are all the components that we want in this module.
BOOTSTRAP - The root component for the app - AppComponent
*/

@NgModule({
  imports: [ BrowserModule,
  FormsModule ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    FirstLastPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
