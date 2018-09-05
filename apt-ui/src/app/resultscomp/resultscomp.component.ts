import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-resultscomp',
  templateUrl: './resultscomp.component.html',
  styleUrls: ['./resultscomp.component.css']
})
export class ResultscompComponent implements OnInit, OnChanges {

  constructor(private searchService: SearchserviceService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  @Input()pcodecurrpromoval: string;
  sendPcodecurrpromoval = '';
  // @Output() sendPcodecurrpromoval: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('latestPromoAnchor') latestPromoAnchor: ElementRef;
  @ViewChild('searchResultsAnchor') searchResultsAnchor: ElementRef;
  @ViewChild('latestPromosDiv') latestPromosDiv: ElementRef;
  @ViewChild('searchResultsDiv') searchResultsDiv: ElementRef;

  promotion: IPromotion;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('In ngOnChanges - ResultsComp ');
    for (const propName in changes) {
      const change = changes[propName];
      console.log('Input field changed is :' + propName);
      if (propName === 'pcodecurrpromoval') {


        console.log('Previous Value : ' + change.previousValue);
        console.log('Current value: ' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue) ) {

          console.log('Setting value to sendPcodecurrpromoval');
          this.latestPromoAnchor.nativeElement.classList.remove('active');
          this.latestPromosDiv.nativeElement.classList.remove('active');
          this.searchResultsAnchor.nativeElement.classList.add('active');
          this.searchResultsDiv.nativeElement.classList.add('active');
          this.sendPcodecurrpromoval = change.currentValue;

          //  this.sendPcodecurrpromoval.emit(change.currentValue);

/*
          this.spinnerService.show();
          this.searchService.getSearchPromoResults(change.currentValue).subscribe( (data:IPromotion) =>
          {
            this.promotion = data;
            console.log(this.promotion.promotionOrChallengeCode);
            this.spinnerService.hide();

          }
          );
          */

        }  //  End of Service call

      } //  End of PropName = 'pcodecurrpromoval'
    }

  }



}
