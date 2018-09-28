import { Component, OnInit, OnChanges, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-trendingpromoscomp',
  templateUrl: './trendingpromos.component.html',
  styleUrls: ['./trendingpromos.component.css']
})
export class TrendingpromosComponent implements OnInit, OnChanges {

  tresultsSortForm: FormGroup;
  tsortby: FormControl;
  tpromotion: IPromotion = undefined;
  errMsgToDisplay: string = undefined;

    ngOnInit() {
      this.tsortby = new FormControl(null);
      this.tresultsSortForm = new FormGroup({ sortby: this.tsortby });
      this.tresultsSortForm.controls.sortby.setValue('startdate');
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

}
