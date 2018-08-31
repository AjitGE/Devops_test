import { Component, OnInit, Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-promodetails',
  templateUrl: './promodetails.component.html',
  styleUrls: ['./promodetails.component.css']
})
export class PromodetailsComponent implements OnInit {

  @Input() promotionOrChallengeCode:string ;
  @Input() isTrending:string;
  visible:boolean = false;
  @ViewChild('ecimg') ecimg:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleContent()
  {
    this.visible = !this.visible;

    var imgsrc:string = this.ecimg.nativeElement.src;
    if(imgsrc.indexOf('Expand-icon')!=-1)
    {
      this.ecimg.nativeElement.src="../../assets/Collapse-icon.svg" ;
    }
    else
    {
      this.ecimg.nativeElement.src="../../assets/Expand-icon.svg" ;
    }

  }

}
