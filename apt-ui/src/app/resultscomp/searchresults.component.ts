import { Component, OnInit, OnChanges, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
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
  promotions: IPromotion[];
  errMsgToDisplay: string = undefined;
  isBottomSearchValid: number;
  allExpandState = false;

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



          this.spinnerService.show();
          this.searchService.getSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
            this.promotions = data;
            console.log('Number of Promotions are : ' + this.promotions.length);
            this.spinnerService.hide();
            this.errMsgToDisplay = undefined;
            this.isBottomSearchValid = 1;
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
          } else {
            this.isBottomSearchValid = 1;
            console.log('Calling Criteria search service with criteria' + change.currentValue);
            this.spinnerService.show();
            this.searchService.getCriteriaSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
              this.promotions = data;
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



}
