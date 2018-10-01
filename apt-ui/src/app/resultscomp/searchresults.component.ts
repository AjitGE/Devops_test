import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { IPromotion } from './promotion';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchserviceService } from '../searchservice.service';
import { Constants } from '../shared/Constants';

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
  p = Constants.PAGINATION_PAGENUM_DEFAULT;
  promos_per_page = Constants.PAGINATION_NO_OF_PROMOS;

  constructor(private searchService: SearchserviceService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.sortby = new FormControl(null);
    this.resultsSortForm = new FormGroup({ sortby: this.sortby });
    this.resultsSortForm.controls.sortby.setValue('startdate');
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (const propName in changes) {
      const change = changes[propName];
      if (propName === 'pcodecurrpromoval') {
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          this.isBottomSearchValid = 1;
          this.spinnerService.show();
          this.searchService.getSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
            this.promotions = data;
            this.resultsSortForm.controls.sortby.setValue('startdate');
            if (this.promotions.length === 1) {
              this.showPromoDetailView(this.promotions[0]);
            }
            this.spinnerService.hide();
            this.errMsgToDisplay = undefined;
          }, (err) => {
            this.handleError(err);
          }
          );


        }

      } else if (propName === 'bsparams') {
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          if (change.currentValue === Constants.KEYWORD_DEFAULT_TOSEND + Constants.FROMDATE_DEFAULT_TOSEND + Constants.TODATE_DEFAULT_TOSEND + Constants.TARGETRADIO_DEFAULT_VALUE + Constants.PARAM_SEPARATOR + Constants.CURRPROMOS_BOTTOM_NOT_SELECTED + Constants.PARTNERCODES_DEFAULT_TOSEND) {
            this.isBottomSearchValid = 0;
            this.promotions = undefined;
          } else {
            this.isBottomSearchValid = 1;
            this.spinnerService.show();
            this.searchService.getCriteriaSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
              this.promotions = data;
              this.resultsSortForm.controls.sortby.setValue('startdate');
              this.spinnerService.hide();
              this.errMsgToDisplay = undefined;

            }, (err) => {
              this.handleError(err);
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

  handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      if (err.message.includes('Http failure response')) {
        this.promotions = undefined;
        this.errMsgToDisplay = Constants.NORESPONSE_ERR_MSG;
        this.spinnerService.hide();
      }
    }
  }

}
