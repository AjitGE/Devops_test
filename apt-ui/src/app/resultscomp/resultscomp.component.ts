import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

import { IPromotion } from './promotion';

@Component({
  selector: 'app-resultscomp',
  templateUrl: './resultscomp.component.html',
  styleUrls: ['./resultscomp.component.css']
})
export class ResultscompComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() pcodecurrpromoval: string;
  @Input() bsparamsReceived: string;
  promotion: IPromotion;
  sendPromotionToToggle: IPromotion;

  sendPcodecurrpromoval = '';
  sendBSparams = '';
  goBackToTabs = false;
  allExpandState = false;
  newSearch: boolean;

  @ViewChild('latestPromoAnchor') latestPromoAnchor: ElementRef;
  @ViewChild('searchResultsAnchor') searchResultsAnchor: ElementRef;
  @ViewChild('latestPromosDiv') latestPromosDiv: ElementRef;
  @ViewChild('searchResultsDiv') searchResultsDiv: ElementRef;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('In ngOnChanges - ResultsComp ');
    for (const propName in changes) {
      const change = changes[propName];
      console.log('Input field changed is :' + propName);
      if (propName === 'pcodecurrpromoval') {


        console.log('Previous Value top pcode : ' + change.previousValue);
        console.log('Current value top pcode : ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {

          console.log('Setting value to sendPcodecurrpromoval');
          this.latestPromoAnchor.nativeElement.classList.remove('active');
          this.latestPromosDiv.nativeElement.classList.remove('active');
          this.searchResultsAnchor.nativeElement.classList.add('active');
          this.searchResultsDiv.nativeElement.classList.add('active');
          this.newSearch = Object.assign({}, true);
          this.sendPcodecurrpromoval = change.currentValue;
        }

      } else if (propName === 'bsparamsReceived') {
        console.log('Previous Value bs params : ' + change.previousValue);
        console.log('Current value bs params : ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {

          console.log('Setting value to sendBSparams');
          this.latestPromoAnchor.nativeElement.classList.remove('active');
          this.latestPromosDiv.nativeElement.classList.remove('active');
          this.searchResultsAnchor.nativeElement.classList.add('active');
          this.searchResultsDiv.nativeElement.classList.add('active');
          this.sendBSparams = change.currentValue;
        }

      }
    }

  }

  onPromoCodeRec(promotion: IPromotion) {
    this.promotion = promotion;
    promotion = Object.assign({}, promotion);
    this.sendPromotionToToggle = promotion;
    console.log('Received promo code from search result :' + promotion.promoCode);
  }

  callParentToggle() {
    console.log('Value of goBackToTabs before assign :' + this.goBackToTabs);
    this.goBackToTabs = !this.goBackToTabs;
    this.goBackToTabs = Object.assign({}, this.goBackToTabs);
    console.log('Value of goBackToTabs final :' + this.goBackToTabs);
  }

  expandCollapseHandler(ecflag: boolean) {
    this.allExpandState = ecflag;
  }

}
