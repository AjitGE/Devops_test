import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchcomp',
  templateUrl: './searchcomp.component.html',
  styleUrls: ['./searchcomp.component.css']
})
export class SearchcompComponent implements OnInit, OnChanges {

  topSearchForm: FormGroup;
  pcode: FormControl;
  currpromochkbx: FormControl;
  pcodepromoval = '';
  @Input() clearAllSignal: boolean;
  @Output() pcodeSubmitted: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { }


  ngOnInit() {
    this.pcode = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5),
        Validators.pattern('[a-zA-Z0-9]*')]);
    this.currpromochkbx = new FormControl(false);

    this.topSearchForm = new FormGroup({
      pcode: this.pcode,
      currpromochkbx: this.currpromochkbx
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['clearAllSignal']) {
      console.log('Got clearall - in search comp');
      this.topSearchForm.markAsPristine();
      this.topSearchForm.markAsUntouched();
      this.pcode.reset();
    }

  }





  topSearchSubmit(formValues) {
    if (this.topSearchForm.valid) {
      this.pcodepromoval = formValues.pcode + ':' + formValues.currpromochkbx;
      console.log(this.pcodepromoval);
      this.pcodeSubmitted.emit(this.pcodepromoval);
    }
  }

  validatePCode() {
    return this.pcode.valid || this.pcode.untouched;
  }

}
