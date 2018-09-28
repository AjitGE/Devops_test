import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
declare var jquery: any;
declare var $: any;

import { IPromotion } from './promotion';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchserviceService } from '../searchservice.service';

@Component({
  selector: 'app-searchresultscomp',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit, OnChanges {

  resultsSortForm: FormGroup;
  sortby: FormControl;
  @Input() pcodecurrpromoval = '';
  @Input() bsparams = '';

  @Output() promoCodeSubmitted: EventEmitter<IPromotion> = new EventEmitter<IPromotion>();
  promotions: IPromotion[];
  errMsgToDisplay: string = undefined;
  isBottomSearchValid: number;
  allExpandState = false;
  p = 1;

  constructor(private searchService: SearchserviceService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.sortby = new FormControl(null);
    this.resultsSortForm = new FormGroup({ sortby: this.sortby });
    this.resultsSortForm.controls.sortby.setValue('startdate');
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('In ngOnChanges ');
    for (const propName in changes) {
      const change = changes[propName];
      console.log('Input field changed is :' + propName);
      if (propName === 'pcodecurrpromoval') {


        console.log('Previous Value : ' + change.previousValue);
        console.log('Current value: ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {

          console.log('Calling Promo search service with code' + change.currentValue);
          this.isBottomSearchValid = 1;
          this.spinnerService.show();
          this.searchService.getSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
            this.promotions = data;
            this.resultsSortForm.controls.sortby.setValue('startdate');
            console.log('Number of Promotions are : ' + this.promotions.length);
            if (this.promotions.length === 1) {
              this.showPromoDetailView(this.promotions[0]);
            }
            this.spinnerService.hide();
            this.errMsgToDisplay = undefined;
          }, (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.message.includes('Http failure response')) {
                console.log('No Response from Ventana/LSCS');
                this.promotions = undefined;
                this.errMsgToDisplay = '<h5>No Response from Ventana/LSCS</h5>';
                this.spinnerService.hide();
              }
            }
          }
          );


        }

      } else if (propName === 'bsparams') {
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          console.log('Received bsparams as ' + change.currentValue);
          if (change.currentValue === 'NOKEYWORDS/NOFROMDATE/NOTODATE/TARGETNOTSELECTED/BCURRPROMONOTSELECTED/NOPARTNERCODES') {
            this.isBottomSearchValid = 0;
            this.promotions = undefined;
          } else {
            this.isBottomSearchValid = 1;
            console.log('Calling Criteria search service with criteria' + change.currentValue);
            this.spinnerService.show();
            this.searchService.getCriteriaSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
              this.promotions = data;
              this.resultsSortForm.controls.sortby.setValue('startdate');
              console.log('Number of Promotions returned for search criteria : ' + this.promotions.length);
              this.spinnerService.hide();
              this.errMsgToDisplay = undefined;

            }, (err) => {
              if (err instanceof HttpErrorResponse) {
                if (err.message.includes('Http failure response')) {
                  console.log('No Response from Ventana/LSCS for given search criteria');
                  this.promotions = undefined;
                  this.errMsgToDisplay = '<h5>No Response from Ventana/LSCS</h5>';
                  this.spinnerService.hide();
                }
              }
            }
            );
          }
        }
      }
    }


  }



  hideSortHandler(hideFlag: boolean) {
    if (hideFlag) {
      this.resultsSortForm.controls.sortby.enable();
    } else {
      this.resultsSortForm.controls.sortby.disable();
    }

  }

  expandCollapseHandler(ecflag: boolean) {
    this.allExpandState = ecflag;
  }

  showPromoDetailView(promotion: IPromotion) {
    this.promoCodeSubmitted.emit(promotion);
  }

  onSortChange(sortTypeEvent: any) {
    const sortType = sortTypeEvent.target.value;
    if (sortType === 'startdate') {
      this.promotions.sort((a: IPromotion, b: IPromotion) => {
        return new Date(b.promoStartDate.split('-').join('-')).getTime() - new Date(a.promoStartDate.split('-').join('-')).getTime();
      });
    } else if (sortType === 'enddate') {
      this.promotions.sort((a: IPromotion, b: IPromotion) => {
        return new Date(b.promoEndDate.split('-').join('-')).getTime() - new Date(a.promoEndDate.split('-').join('-')).getTime();
      });
    } else if (sortType === 'pcodeatoz') {
      this.promotions.sort(this.sortByNameA2Z);
    } else if (sortType === 'pcodeztoa') {
      this.promotions.sort(this.sortByNameZ2A);
    }
  }

  sortByNameA2Z(p1: IPromotion, p2: IPromotion) {
    if (p1.promoCode > p2.promoCode) {
      return 1;
    } else if (p1.promoCode === p2.promoCode) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByNameZ2A(p1: IPromotion, p2: IPromotion) {
    if (p1.promoCode < p2.promoCode) {
      return 1;
    } else if (p1.promoCode === p2.promoCode) {
      return 0;
    } else {
      return -1;
    }
  }

}
