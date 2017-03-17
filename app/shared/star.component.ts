import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
    constructor() { }
    @Input() rating: number;
    starWidth: number
    
    //this function is type event emitter and the pay load will be a string
    //and then we set to a new instance of EventEmitter payload string. 
    //we decorate it with the output decorator so the parent can respond to this event.
    @Output() ratingClicked : EventEmitter<string> =
    new EventEmitter<string>();
    

    ngOnChanges() {
        this.starWidth = this.rating * 86/5;
     }

     onClick(): void {
         this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
     }
}