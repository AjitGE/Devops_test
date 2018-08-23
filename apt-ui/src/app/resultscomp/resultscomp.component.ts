import { Component, OnInit,OnChanges,Input,SimpleChanges } from '@angular/core';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-resultscomp',
  templateUrl: './resultscomp.component.html',
  styleUrls: ['./resultscomp.component.css']
})
export class ResultscompComponent implements OnInit,OnChanges {

  constructor(private searchService:SearchserviceService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  @Input()pcodecurrpromoval:string;
  
  promotion: IPromotion;

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges):void{
    console.log('In ngOnChanges ');
    for (let propName in changes) { 
      let change = changes[propName];
      console.log('Input field changed is :'+propName);
      if(propName === 'pcodecurrpromoval')
      {
        
        
        console.log('Previous Value : '+ change.previousValue);
        console.log('Current value: '+change.currentValue);
        if(change.currentValue )
        {
          this.spinnerService.show();
          console.log('Calling Promo search service');
          this.searchService.getSearchPromoResults(change.currentValue).subscribe( (data:IPromotion) => 
          {
            this.promotion = data;
            console.log(this.promotion.promotionOrChallengeCode);
            this.spinnerService.hide();
          }
          );
        }
      }
    }

  }
  
  

}
