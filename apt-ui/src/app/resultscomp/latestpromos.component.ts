import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { IPromotion } from './promotion';
import { SearchserviceService } from '../searchservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-latestpromoscomp',
  templateUrl: './latestpromos.component.html',
  styleUrls: ['./latestpromos.component.css']
})
export class LatestpromosComponent implements OnInit, OnChanges {

  lpromosSortForm: FormGroup;
  lsortby: FormControl;
  lpromotion: IPromotion = undefined;

    ngOnInit() {
      this.lsortby = new FormControl(null);
      this.lpromosSortForm = new FormGroup({ lsortby: this.lsortby });
      this.lpromosSortForm.controls.lsortby.setValue('startdate');
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

}
