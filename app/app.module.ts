import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//routing
import { BrowserModule } from '@angular/platform-browser';// ex ngIf
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

//test
import { FirstLastPipe } from './shared/custom-pipes/firstLast';


import { ProductModule } from './products/product.module';
 
 
/*
IMPORTS - External modules we want available to this module "BrowserModule".
DECLATATIONS - These are all the components that we want in this module.
BOOTSTRAP - The root component for the app - AppComponent
*/

@NgModule({
  imports: [ 
    BrowserModule,
    ProductModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },  // typically for 404 page    
    ]) 
    ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    FirstLastPipe
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
