import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../searchservice.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Constants } from '../shared/Constants';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private searchService: SearchserviceService) { }
  healthstatus: string;

  ngOnInit() {
    this.searchService.getServicesPing().subscribe((data: string) => {
      this.healthstatus = data;
    }, (err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.message.includes('Http failure response')) {
          console.log(err.message);
          this.healthstatus = Constants.HEALTH_ERR_MSG;
        }
      }
    }
    );
  }

}
