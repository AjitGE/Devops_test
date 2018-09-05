import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promodetails',
  templateUrl: './promodetails.component.html',
  styleUrls: ['./promodetails.component.css']
})
export class PromodetailsComponent implements OnInit {

  @Input() promotionOrChallengeCode: string ;
  @Input() isTrending: string;
  visible = false;
  @ViewChild('ecimg') ecimg: ElementRef;

  @Output() hidesortevent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;

    const imgsrc: string = this.ecimg.nativeElement.src;
    if (imgsrc.indexOf('Expand-icon') !== -1) {
      this.ecimg.nativeElement.src = 'Collapse-icon.svg' ;
      this.hidesortevent.emit(false);
    } else {
      this.ecimg.nativeElement.src = 'Expand-icon.svg' ;
      this.hidesortevent.emit(true);
    }

  }

}
