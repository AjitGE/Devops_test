import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promodetails',
  templateUrl: './promodetails.component.html',
  styleUrls: ['./promodetails.component.css']
})
export class PromodetailsComponent implements OnInit {

  visible:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleContent()
  {
    this.visible = !this.visible;
  }

}
