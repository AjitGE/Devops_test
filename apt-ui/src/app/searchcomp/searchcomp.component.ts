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

  constructor() { }


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



    for (const propName in changes) {
      const change = changes[propName];
      if (propName === 'clearAllSignal') {
        console.log('Value of clearAllSignal - previous :' + change.previousValue);
        console.log('Value of clearAllSignal - current :' + change.currentValue);
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
          console.log('Got clearall - in search comp');
          this.pcode.reset();
          this.topSearchForm.markAsPristine();
          this.topSearchForm.markAsUntouched();
        }
      }
    }

  }





  topSearchSubmit(formValues) {
    if (this.topSearchForm.valid) {
      this.pcodepromoval = formValues.pcode + ':' + formValues.currpromochkbx;
      console.log(this.pcodepromoval);
      this.pcodeSubmitted.emit(this.pcodepromoval.toUpperCase());
    }
  }

  validatePCode() {
    return this.pcode.valid || this.pcode.untouched;
  }

}
