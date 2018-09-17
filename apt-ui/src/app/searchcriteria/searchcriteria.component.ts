import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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
  targetedOnlychkbx: FormControl;
  nontargetedOnlychkbx: FormControl;
  currpromosOnlychkbx: FormControl;
  partnercodetext: FormControl;
  toDateFormControl: FormControl;
  fromDateFormControl: FormControl;

  removable = true;
  selectable = true;
  keywordsarray: string[] = [];
  maxKeywordsAllowed = 4;

  // Date variables
  // fromDateValue: string;
  // toDateValue: string;
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
  usDatePattern = /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/;

  @Output() bottomSearchParams: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendClearAllReq: EventEmitter<boolean> = new EventEmitter<boolean>();
  clearallflag = false;

  ngOnInit() {

    this.keywordtext = new FormControl('', [Validators.maxLength(300),
    Validators.pattern('[a-zA-Z0-9, ]*')]);

    this.targetedOnlychkbx = new FormControl(false);
    this.nontargetedOnlychkbx = new FormControl(false);
    this.currpromosOnlychkbx = new FormControl(false);
    this.partnercodetext = new FormControl('', [Validators.pattern('[a-zA-Z]*')]);
    this.fromDateFormControl = new FormControl();
    this.toDateFormControl = new FormControl();
    this.bottomSearchForm = new FormGroup({
      keywordtext: this.keywordtext,
      targetedOnlychkbx: this.targetedOnlychkbx,
      nontargetedOnlychkbx: this.nontargetedOnlychkbx,
      currpromosOnlychkbx: this.currpromosOnlychkbx,
      partnercodetext: this.partnercodetext,
      fromDateFormControl: this.fromDateFormControl,
      toDateFormControl: this.toDateFormControl
    });

    // this.fromDateFormControl.valueChanges.subscribe(value => this.onFromDateValueChanged(value));
    // this.toDateFormControl.valueChanges.subscribe(value => this.onToDateValueChanged(value));
  }

  clickedPlus(): void {
    const keywordstring: string = this.bottomSearchForm.get('keywordtext').value;
    const splstring = keywordstring.split(',');
    for (let i = 0; i < splstring.length; i++) {
      const value = splstring[i];
      if (this.keywordsarray.length > this.maxKeywordsAllowed) {
        this.bottomSearchForm.get('keywordtext').setValue('');
        break;
      }
      if (value && value.trim().length && !this.keywordsarray.find(x => x === value)) {
        this.keywordsarray.push(value);
      }
      this.bottomSearchForm.get('keywordtext').setValue('');
    }
  }

  remove(fruit: any): void {
    const index = this.keywordsarray.indexOf(fruit);

    if (index >= 0) {
      this.keywordsarray.splice(index, 1);
    }
  }

  validateKeywordtext() {
    return this.keywordtext.valid || this.keywordtext.untouched;
  }

  validatePartnerCodetext() {
    return this.partnercodetext.valid || this.partnercodetext.untouched;
  }

  bottomSearchSubmit(formValues) {
    console.log('Its in bottom search submit');
    this.clickedPlus();
    if (this.bottomSearchForm.valid) {
      console.log('Inside valid form of bottom search');
    }

  }

  clearAllClicked(event: Event) {
    this.clearallflag = !this.clearallflag;
    this.keywordsarray = [];
    this.sendClearAllReq.emit(this.clearallflag);
  }

  onFromDateSelected(value: Date) {
    this.fromDatePickerValue = value;
    // this.fromDateValue = value.getMonth() + 1 + '/' + value.getDate() + '/' + value.getFullYear();
  }

  onToDateSelected(value: Date) {
    this.toDatePickerValue = value;
    // this.toDateValue = value.getMonth() + 1 + '/' + value.getDate() + '/' + value.getFullYear();
  }

  onFromDateValueChanged(data?: any) {
    console.log('Value of from date :' + data);
  }

  onToDateValueChanged(data?: any) {
    console.log('Value of to date:' + data);
  }

  onFromDateChanged(data?: any) {

    if (!(this.fromDateFormControl.value === null || this.fromDateFormControl.value === '')) {

      if (!this.fromDateFormControl.value.match(this.usDatePattern)) {
        this.invalidFromDateError = { isError: true, errorMessage: 'Date format should be MM/DD/YYYY' };
      } else {
        this.invalidFromDateError = { isError: false, errorMessage: '' };
        if (new Date(this.fromDateFormControl.value) > this.currDate || new Date(this.fromDateFormControl.value) < this.twoYearDate) {
          this.invalidFromDateError = { isError: true, errorMessage: 'Searches must be within 2 years' };
        }
      }
    } else {
      this.invalidToDateError = { isError: false, errorMessage: '' };
    }

    if (!(this.toDateFormControl.value === null || this.toDateFormControl.value === '')) {
    //  compareTwoDates();
    }

  }

  onToDateChanged(data?: any) {
    if (!(this.toDateFormControl.value === null || this.toDateFormControl.value === '')) {
      if (!this.toDateFormControl.value.match(this.usDatePattern)) {
        this.invalidToDateError = { isError: true, errorMessage: 'Date format should be MM/DD/YYYY' };
      } else {
        this.invalidToDateError = { isError: false, errorMessage: '' };
        if (new Date(this.toDateFormControl.value) > this.currDate || new Date(this.toDateFormControl.value) < this.twoYearDate) {
          this.invalidToDateError = { isError: true, errorMessage: 'Searches must be within 2 years' };
        }
      }
    } else {
      this.invalidToDateError = { isError: false, errorMessage: '' };
    }

  }

  compareTwoDates() {

  }


}
