import { Component, OnInit,OnChanges,Input,SimpleChanges,ElementRef, ViewChild } from '@angular/core';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-latestpromoscomp',
  templateUrl: './latestpromos.component.html',
  styleUrls: ['./latestpromos.component.css']
})
export class LatestpromosComponent implements OnInit,OnChanges {

    ngOnInit() {
   
    }
  
    ngOnChanges(changes: SimpleChanges):void{
    }

}