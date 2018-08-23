import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-searchcomp',
  templateUrl: './searchcomp.component.html',
  styleUrls: ['./searchcomp.component.css']
})
export class SearchcompComponent implements OnInit {

  constructor( )
   { }
  

  ngOnInit() {
       
  }

  pcode:string='';
  currpromovalany:any ;
  pcodepromoval:string='';
  currpromoval:boolean=false;

  @Output() pcodeSubmitted: EventEmitter<string> = new EventEmitter<string>();
  


  onSubmit() : void {

    this.pcodepromoval = this.pcode + ':' + this.currpromoval;
    console.log(this.pcode);
    this.pcodeSubmitted.emit(this.pcodepromoval);   
    }

    onCurrPromoChkbxClicked (element: HTMLInputElement) : void
    {
      this.currpromovalany =  ` ${element.checked? true : false}`;
      this.currpromoval = <boolean> this.currpromovalany;
    }
    

}
