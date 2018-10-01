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
      if (propName === 'promotionFromSearch') {

        if (change.currentValue) {
          this.toggleResultContent();
        }
      } else if (propName === 'backToTabs') {

        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          this.toggleResultContent();
        }
      } else if (propName === 'gotNewSearch') {

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
  }

}
