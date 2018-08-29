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
  @Input() pcodecurrpromoval: string = '';
  promotions: IPromotion[];
  errMsgToDisplay: string = undefined;


  constructor(private searchService: SearchserviceService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.sortby = new FormControl(null);
    this.resultsSortForm = new FormGroup({ sortby: this.sortby });
    this.resultsSortForm.controls.sortby.setValue('startdate');
  }


  ngOnChanges(changes: SimpleChanges): void {

    console.log('In ngOnChanges ');
    for (let propName in changes) {
      let change = changes[propName];
      console.log('Input field changed is :' + propName);
      if (propName === 'pcodecurrpromoval') {


        console.log('Previous Value : ' + change.previousValue);
        console.log('Current value: ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {

          console.log('Calling Promo search service with code' + change.currentValue);



          this.spinnerService.show();
          this.searchService.getSearchPromoResults(change.currentValue).subscribe((data: IPromotion[]) => {
            this.promotions = data;
            console.log('Number of Promotions are : '+ this.promotions.length)
            this.spinnerService.hide();
            this.errMsgToDisplay = undefined

          }, (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.message.includes('Http failure response')) {
                console.log("No Response from Ventana/LSCS");
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