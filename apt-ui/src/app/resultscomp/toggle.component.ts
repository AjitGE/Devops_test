import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPromotion } from './promotion';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() promotionFromSearch: IPromotion;
  @Input() backToTabs: boolean;
  @Input() gotNewSearch: boolean;
  isSinglePromoView = false;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change = changes[propName];
      console.log('Input field changed is :' + propName);
      if (propName === 'promotionFromSearch') {
        console.log('Previous Value : ' + change.previousValue);
        console.log('Current value: ' + change.currentValue);
        if (change.currentValue) {
          this.toggleResultContent();
          console.log('Value of PromoCode got from Results :' + this.promotionFromSearch);
        }
      } else if (propName === 'backToTabs') {
        console.log('Previous Value backToTabs: ' + change.previousValue);
        console.log('Current value backToTabs: ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          this.toggleResultContent();
        }
      } else if (propName === 'gotNewSearch') {
        console.log('Previous Value gotNewSearch: ' + change.previousValue);
        console.log('Current value gotNewSearch: ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          if (this.isSinglePromoView) {
            this.isSinglePromoView = false;
          }
        }
      }
    }
  }

  toggleResultContent() {
    this.isSinglePromoView = !this.isSinglePromoView;
    console.log('Value of isSinglePromoView is :' + this.isSinglePromoView);
  }

}
