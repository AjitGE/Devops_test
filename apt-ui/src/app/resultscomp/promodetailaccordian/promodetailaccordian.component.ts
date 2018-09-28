import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promodetailaccordian',
  templateUrl: './promodetailaccordian.component.html',
  styleUrls: ['./promodetailaccordian.component.css']
})
export class PromodetailaccordianComponent implements OnInit {

  accvisible = false;
  buttonExpandCollapse = true;
  @Output() expandcollapseevent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggleAccordion(): void {
    this.accvisible = !this.accvisible;
    this.buttonExpandCollapse = !this.buttonExpandCollapse;
    this.expandcollapseevent.emit(this.accvisible);
  }

}
