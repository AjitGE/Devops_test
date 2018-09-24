import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: this.twoYearDate,
        maxDate: this.currDate,
        dateInputFormat: 'MM/DD/YYYY'
      });
  }

  bottomSearchForm: FormGroup;
  keywordtext: FormControl;
  targetvsnontarget: FormControl;
  bcurrpromosOnlychkbx: FormControl;
  partnercodetext: FormControl;
  toDateFormControl: FormControl;
  fromDateFormControl: FormControl;

  removable = true;
  selectable = true;
  keywordsarray: string[] = [];
  display_kwarray: string[] = [];
  maxKeywordsAllowed = 4;
  maxKeywordsError: any = { isError: false, errorMessage: '' };
  isValidSubmit = false;
  singlekw_max = 26;

  // Date variables
  fromDatePickerValue: Date;
  toDatePickerValue: Date;
  isFromOpen = false;
  isToOpen = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  twoYearDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 2));
  currDate: Date = new Date();
  dateMask: any[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  invalidFromDateError: any = { isError: false, errorMessage: '' };
  invalidToDateError: any = { isError: false, errorMessage: '' };
  invalidFromGreaterToError: any = { isError: false, errorMessage: '' };
  usDatePattern = /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/;

  @Output() bottomSearchParams: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendClearAllReq: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() bsparams: EventEmitter<string> = new EventEmitter<string>();
  clearallflag = false;

  ngOnInit() {

    this.keywordtext = new FormControl('', [Validators.maxLength(300),
    Validators.pattern('[a-zA-Z0-9, ]*')]);

    this.targetvsnontarget = new FormControl('TARGETNOTSELECTED');
    this.bcurrpromosOnlychkbx = new FormControl(false);
    this.partnercodetext = new FormControl('', [Validators.pattern('[a-zA-Z]*')]);
    this.fromDateFormControl = new FormControl();
    this.toDateFormControl = new FormControl();
    this.bottomSearchForm = new FormGroup({
      keywordtext: this.keywordtext,
      targetvsnontarget: this.targetvsnontarget,
      bcurrpromosOnlychkbx: this.bcurrpromosOnlychkbx,
      partnercodetext: this.partnercodetext,
      fromDateFormControl: this.fromDateFormControl,
      toDateFormControl: this.toDateFormControl
    });

    // this.fromDateFormControl.valueChanges.subscribe(value => this.onFromDateValueChanged(value));
    // this.toDateFormControl.valueChanges.subscribe(value => this.onToDateValueChanged(value));
  }

  clickedPlus(): void {
    if (this.validateKeywordtext()) {
      const keywordstring: string = this.bottomSearchForm.get('keywordtext').value;
      if (!(keywordstring === null)) {
        const splstring = keywordstring.split(',');
        for (let i = 0; i < splstring.length; i++) {
          const value = splstring[i];
          let dispvalue = '';
          if (this.keywordsarray.length > this.maxKeywordsAllowed) {
            this.bottomSearchForm.get('keywordtext').setValue('');
            this.maxKeywordsError = { isError: true, errorMessage: 'A max of 5 keywords can be entered' };
            break;
          }
          if (value && value.trim().length && !this.keywordsarray.find(x => x === value)) {
            if (value.length > this.singlekw_max) {
              for (let kwl = 0; kwl < value.length; kwl = kwl + this.singlekw_max) {
                dispvalue += value.substring(kwl, kwl + this.singlekw_max) + '\n';
              }
            }
            this.keywordsarray.push(value);
            this.display_kwarray.push(dispvalue === '' ? value : dispvalue);
            this.isValidSubmit = true;
          }
          this.bottomSearchForm.get('keywordtext').setValue('');
        }
      }
    }
  }

  remove(fruit: any): void {
    const index = this.display_kwarray.indexOf(fruit);

    if (index >= 0) {
      this.keywordsarray.splice(index, 1);
      this.display_kwarray.splice(index, 1);
    }

    if (index <= this.maxKeywordsAllowed) {
      this.maxKeywordsError = { isError: false, errorMessage: '' };
    }

    if (this.keywordsarray.length === 0) {
      this.isValidSubmit = false;
    }
  }

  validateKeywordtext() {
    return this.keywordtext.valid || this.keywordtext.untouched;
  }

  validatePartnerCodetext() {
    return this.partnercodetext.valid || this.partnercodetext.untouched;
  }

  bottomSearchSubmit(formValues) {
    if (this.keywordtext.value) {
      this.keywordtext.markAsTouched();
    }
    if (this.fromDateFormControl.value) {
      this.onFromDateChanged();
    }
    if (this.toDateFormControl.value) {
      this.onToDateChanged();
    }
    if (this.bottomSearchForm.valid) {
      if (this.validateKeywordtext()) {
        this.clickedPlus();
      }
      let bsparamstring = '';
      if (this.keywordsarray.length === 0) {
        bsparamstring = 'NOKEYWORDS/';
      } else {
        bsparamstring = this.keywordsarray.join(',') + '/';
      }
      if (this.fromDateFormControl.value) {
        bsparamstring += this.transformNoSlashDate(this.fromDateFormControl.value) + '/';
      } else {
        bsparamstring += 'NOFROMDATE/';
      }
      if (this.toDateFormControl.value) {
        bsparamstring += this.transformNoSlashDate(this.toDateFormControl.value) + '/';
      } else {
        bsparamstring += 'NOTODATE/';
      }
      if (this.targetvsnontarget.value) {
        bsparamstring += this.targetvsnontarget.value + '/';
      } else {
        bsparamstring += 'TARGETNOTSELECTED' + '/';
      }
      if (this.bcurrpromosOnlychkbx.value) {
        bsparamstring += 'BCURRPROMOSELECTED/';
      } else {
        bsparamstring += 'BCURRPROMONOTSELECTED/';
      }
      this.partnercodetext.setValue('');
      if (this.partnercodetext.value) {
        bsparamstring += this.partnercodetext.value;
      } else {
        bsparamstring += 'NOPARTNERCODES';
      }

      console.log('value of bsparamstring is ' + bsparamstring);
      this.bsparams.emit(bsparamstring);
    }

  }

  clearAllClicked(event: Event) {
    this.clearallflag = !this.clearallflag;
    this.keywordsarray = [];
    this.display_kwarray = [];
    this.invalidFromGreaterToError = { isError: false, errorMessage: '' };
    this.invalidFromDateError = { isError: false, errorMessage: '' };
    this.invalidToDateError = { isError: false, errorMessage: '' };
    this.isValidSubmit = false;
    this.sendClearAllReq.emit(this.clearallflag);
  }

  onFromDateSelected(value: Date) {
    this.fromDatePickerValue = value;
    this.fromDateFormControl.setValue(this.transformDate(value));
    this.onFromDateChanged();
  }

  onToDateSelected(value: Date) {
    this.toDatePickerValue = value;
    this.toDateFormControl.setValue(this.transformDate(value));
    this.onToDateChanged();
  }

  onFromDateValueChanged(data?: any) {
    console.log('Value of from date :' + data);
  }

  onToDateValueChanged(data?: any) {
    console.log('Value of to date:' + data);
  }

  onFromDateChanged() {
    if (!(this.fromDateFormControl.value === null || this.fromDateFormControl.value === '')) {

      if (!this.fromDateFormControl.value.match(this.usDatePattern)) {
        this.invalidFromDateError = { isError: true, errorMessage: 'Date format should be MM/DD/YYYY' };
        this.isValidSubmit = false;
        this.bottomSearchForm.controls.fromDateFormControl.setErrors({ 'incorrect': true });
      } else {
        this.invalidFromDateError = { isError: false, errorMessage: '' };
        this.isValidSubmit = true;
        this.bottomSearchForm.controls.fromDateFormControl.setErrors(null);
        if (new Date(this.fromDateFormControl.value) > this.currDate || new Date(this.fromDateFormControl.value) < this.twoYearDate) {
          this.invalidFromDateError = { isError: true, errorMessage: 'Searches must be within 2 years' };
          this.bottomSearchForm.controls.fromDateFormControl.setErrors({ 'incorrect': true });
          this.isValidSubmit = false;
        }
      }
    } else {
      this.invalidToDateError = { isError: false, errorMessage: '' };
      this.bottomSearchForm.controls.fromDateFormControl.setErrors(null);
      this.isValidSubmit = true;
    }

    if (!(this.toDateFormControl.value === null || this.toDateFormControl.value === '')) {
      this.compareTwoDates();
    }

  }

  onToDateChanged() {
    if (!(this.toDateFormControl.value === null || this.toDateFormControl.value === '')) {
      if (!this.toDateFormControl.value.match(this.usDatePattern)) {
        this.invalidToDateError = { isError: true, errorMessage: 'Date format should be MM/DD/YYYY' };
        this.bottomSearchForm.controls.toDateFormControl.setErrors({ 'incorrect': true });
        this.isValidSubmit = false;
      } else {
        this.invalidToDateError = { isError: false, errorMessage: '' };
        this.isValidSubmit = true;
        this.bottomSearchForm.controls.toDateFormControl.setErrors(null);
        if (new Date(this.toDateFormControl.value) > this.currDate || new Date(this.toDateFormControl.value) < this.twoYearDate) {
          this.invalidToDateError = { isError: true, errorMessage: 'Searches must be within 2 years' };
          this.bottomSearchForm.controls.toDateFormControl.setErrors({ 'incorrect': true });
          this.isValidSubmit = false;
        }
      }
    } else {
      this.invalidToDateError = { isError: false, errorMessage: '' };
      this.bottomSearchForm.controls.toDateFormControl.setErrors(null);
      this.isValidSubmit = true;
    }

    if (!(this.fromDateFormControl.value === null || this.fromDateFormControl.value === '')) {
      this.compareTwoDates();
    }

  }

  compareTwoDates() {
    if (new Date(this.fromDateFormControl.value) > new Date(this.toDateFormControl.value)) {
      this.invalidFromGreaterToError = { isError: true, errorMessage: 'Start date cannot be greater than end date' };
      this.bottomSearchForm.controls.fromDateFormControl.setErrors({ 'incorrect': true });
      this.isValidSubmit = false;
    } else {
      this.invalidFromGreaterToError = { isError: false, errorMessage: '' };
      this.bottomSearchForm.controls.fromDateFormControl.setErrors(null);
      this.isValidSubmit = true;
    }
  }

  transformDate(fulldatevalue: Date): string {
    return (new DatePipe('en-US')).transform(fulldatevalue, 'MM/dd/yyyy');
  }

  transformNoSlashDate(fulldatevalue: Date): string {
    return (new DatePipe('en-US')).transform(fulldatevalue, 'MMddyyyy');
  }

}
