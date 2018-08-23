import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchcomp',
  templateUrl: './searchcomp.component.html',
  styleUrls: ['./searchcomp.component.css']
})
export class SearchcompComponent implements OnInit {

  topSearchForm: FormGroup;
  pcode: FormControl;
  currpromochkbx: FormControl;
  pcodepromoval:string='';
  @Output() pcodeSubmitted: EventEmitter<string> = new EventEmitter<string>();

  constructor( )
   { }
  

  ngOnInit() {
    this.pcode = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(5),
        Validators.pattern('[a-zA-Z0-9]*')]);
    this.currpromochkbx = new FormControl(false);

    this.topSearchForm = new FormGroup({
      pcode: this.pcode,
      currpromochkbx: this.currpromochkbx
    });
       
  }
  

 
  

  topSearchSubmit(formValues)
  {
    if(this.topSearchForm.valid)
    {
      this.pcodepromoval = formValues.pcode + ':' + formValues.currpromochkbx;
      console.log(this.pcodepromoval);
      this.pcodeSubmitted.emit(this.pcodepromoval); 
    }
  }

  validatePCode()
  {
    return this.pcode.valid || this.pcode.untouched;
  }

}
