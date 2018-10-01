import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../shared/Constants';

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

  // Labels
  promopstta_label = Constants.PROMOPSTPA_LABEL;
  currpromos_label = Constants.CURRPROMOSONLY_TOP_LABEL;

  // Warnings text
  required_text = Constants.REQUIRED_TEXT;
  specialchar_na_text = Constants.SPECIALCHAR_NA;
  least2char_text = Constants.LEAST2CHAR_TEXT;
  max5char_text = Constants.MAX5CHAR_TEXT;

  constructor() { }


  ngOnInit() {
    this.pcode = new FormControl('', [Validators.required, Validators.minLength(Constants.MINLENTH_CHAR_TOPSEARCH), Validators.maxLength(Constants.MAXLENGTH_CHAR_TOPSEARCH),
    Validators.pattern(Constants.CHARS_ALLOWED_TOPSEARCH)]);
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
        if (change.currentValue && !(change.currentValue === change.previousValue)) {
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
