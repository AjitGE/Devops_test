import { Component, OnInit, OnChanges, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpErrorResponse } from '@angular/common/http';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';

@Component({
  selector: 'app-resultscomp',
  templateUrl: './resultscomp.component.html',
  styleUrls: ['./resultscomp.component.css']
})
export class ResultscompComponent implements OnInit, OnChanges {

  constructor(private searchService: SearchserviceService,
    private spinnerService: Ng4LoadingSpinnerService) { }

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
          this.newSearch = Object.assign({}, true);
          this.sendBSparams = change.currentValue;
        }

      }
    }

  }

  onPromoCodeRec(searchedPromotion: IPromotion) {

    console.log('Calling promoDetail service for code' + searchedPromotion.promoCode);
    this.spinnerService.show();

    this.searchService.getPromoDetailResults(searchedPromotion.promoCode).subscribe((data: IPromotion) => {
      this.promotion = data;
      this.promotion.promoStartDate = searchedPromotion.promoStartDate;
      this.promotion.promoEndDate = searchedPromotion.promoEndDate;
      this.promotion.tac = searchedPromotion.tac;
      this.promotion.memRegStartDate = searchedPromotion.memRegStartDate;
      this.promotion.memRegEndDate = searchedPromotion.memRegEndDate;
      this.promotion.memTravelStartDate = searchedPromotion.memTravelStartDate;
      this.promotion.memTravelEndDate = searchedPromotion.memTravelEndDate;
      this.promotion.lateRegEndDate = searchedPromotion.lateRegEndDate;
      this.spinnerService.hide();
    }, (err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.message.includes('Http failure response')) {
          console.log('Some Error in Services');
          this.spinnerService.hide();
        }
      }
    }
    );

    searchedPromotion = Object.assign({}, searchedPromotion);
    this.sendPromotionToToggle = searchedPromotion;
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
