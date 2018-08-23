import { Component, OnInit,OnChanges,Input,SimpleChanges,ElementRef, ViewChild } from '@angular/core';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-trendingpromoscomp',
  templateUrl: './trendingpromos.component.html',
  styleUrls: ['./trendingpromos.component.css']
})
export class TrendingpromosComponent implements OnInit,OnChanges {

    ngOnInit() {
   
    }
  
    ngOnChanges(changes: SimpleChanges):void{
    }

}