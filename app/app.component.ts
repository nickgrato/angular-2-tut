import{Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
        <pm-products (onRatingClicked)="onRatingClicked($event)"></pm-products>
    </div>
    `
}) 
export class AppComponent{
    pageTitle: string = 'Acme Product Managment'
    
      onRatingClicked(message : string): void {
       console.log(message + 'from the top');
   }
   
}
