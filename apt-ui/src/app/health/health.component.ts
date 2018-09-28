import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../searchservice.service';
import { HttpErrorResponse } from '@angular/common/http';

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
          console.log('No Response from Services - SpringBoot');
          this.healthstatus = 'Not able to connect to services';
        }
      }
    }
    );
  }

}
