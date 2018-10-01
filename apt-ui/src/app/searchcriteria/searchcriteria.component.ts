import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { Constants } from '../shared/Constants';


@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: Constants.CALENDARPICKER_THEME,
        showWeekNumbers: false,
        minDate: this.twoYearDate,
        maxDate: this.currDate,
        dateInputFormat: Constants.CALENDARPICKER_FORMAT
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
  maxKeywordsAllowed = Constants.TOTAL_KEYWORDS_ALLOWED;
  maxKeywordsError: any = { isError: false, errorMessage: '' };
  isValidSubmit = false;
  singlekw_max = Constants.SINGLE_KEYWORD_MAXCHAR_PERLINE;

  // Date variables
  fromDatePickerValue: Date;
  toDatePickerValue: Date;
  isFromOpen = false;
  isToOpen = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  twoYearDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - Constants.MAXYEARS_TOSEARCH));
  currDate: Date = new Date();
  dateMask: any[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  invalidFromDateError: any = { isError: false, errorMessage: '' };
  invalidToDateError: any = { isError: false, errorMessage: '' };
  invalidFromGreaterToError: any = { isError: false, errorMessage: '' };
  usDatePattern = Constants.USDATEPATTERN;

  @Output() bottomSearchParams: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendClearAllReq: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() bsparams: EventEmitter<string> = new EventEmitter<string>();
  clearallflag = false;

  // Labels
  keyword_label = Constants.KEYWORD_LABEL;
  keyword_sub_label = Constants.KEYWORD_SUB_LABEL;
  specchar_na_text = Constants.SPECIALCHAR_NA;
  keyword_maxchar_text = Constants.MAX300CHAR_TEXT;
  effdaterange_label = Constants.EFFDATERANGE_LABEL;
  to_label = Constants.TO_LABEL;
  misc_label = Constants.MISC_LABEL;
  targetonly_label = Constants.TARGETONLY_LABEL;
  nontargetonly_label = Constants.NONTARGETONLY_LABEL;
  currpromosonly_label = Constants.CURRPROMOSONLY_BOTTOM_LABEL;
  partnercodes_label = Constants.PARTNERCODES_LABEL;
  searchbutton_label = Constants.SEARCHBUTTON_LABEL;
  clearallbutton_label = Constants.CLEARALLBUTTON_LABEL;

  ngOnInit() {

    this.keywordtext = new FormControl('', [Validators.maxLength(Constants.MAX300CHAR),
    Validators.pattern(Constants.KEYWORD_ALLOWED_CHAR)]);

    this.targetvsnontarget = new FormControl(Constants.TARGETRADIO_DEFAULT_VALUE);
    this.bcurrpromosOnlychkbx = new FormControl(false);
    this.partnercodetext = new FormControl('', [Validators.pattern(Constants.PARTNERCODES_ALLOWED_CHAR)]);
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
            this.maxKeywordsError = { isError: true, errorMessage: Constants.KEYWORD_ALERT_MAX_MSG };
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

  remove(removeKeyword: any): void {
    const index = this.display_kwarray.indexOf(removeKeyword);

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
        bsparamstring = Constants.KEYWORD_DEFAULT_TOSEND;
      } else {
        bsparamstring = this.keywordsarray.join(Constants.KEYWORD_SEPARATOR) + Constants.PARAM_SEPARATOR;
      }
      if (this.fromDateFormControl.value) {
        bsparamstring += this.transformNoSlashDate(this.fromDateFormControl.value) + Constants.PARAM_SEPARATOR;
      } else {
        bsparamstring += Constants.FROMDATE_DEFAULT_TOSEND;
      }
      if (this.toDateFormControl.value) {
        bsparamstring += this.transformNoSlashDate(this.toDateFormControl.value) + Constants.PARAM_SEPARATOR;
      } else {
        bsparamstring += Constants.TODATE_DEFAULT_TOSEND;
      }
      if (this.targetvsnontarget.value) {
        bsparamstring += this.targetvsnontarget.value + Constants.PARAM_SEPARATOR;
      } else {
        bsparamstring += Constants.TARGETRADIO_DEFAULT_VALUE + Constants.PARAM_SEPARATOR;
      }
      if (this.bcurrpromosOnlychkbx.value) {
        bsparamstring += Constants.CURRPROMOS_BOTTOM_SELECTED;
      } else {
        bsparamstring += Constants.CURRPROMOS_BOTTOM_NOT_SELECTED;
      }
      this.partnercodetext.setValue('');
      if (this.partnercodetext.value) {
        bsparamstring += this.partnercodetext.value;
      } else {
        bsparamstring += Constants.PARTNERCODES_DEFAULT_TOSEND;
      }
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
        this.invalidFromDateError = { isError: true, errorMessage: Constants.DATEFORMAT_ERR_MSG };
        this.isValidSubmit = false;
        this.bottomSearchForm.controls.fromDateFormControl.setErrors({ 'incorrect': true });
      } else {
        this.invalidFromDateError = { isError: false, errorMessage: '' };
        this.isValidSubmit = true;
        this.bottomSearchForm.controls.fromDateFormControl.setErrors(null);
        if (new Date(this.fromDateFormControl.value) > this.currDate || new Date(this.fromDateFormControl.value) < this.twoYearDate) {
          this.invalidFromDateError = { isError: true, errorMessage: Constants.DATERANGE_ERR_MSG };
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
        this.invalidToDateError = { isError: true, errorMessage: Constants.DATEFORMAT_ERR_MSG };
        this.bottomSearchForm.controls.toDateFormControl.setErrors({ 'incorrect': true });
        this.isValidSubmit = false;
      } else {
        this.invalidToDateError = { isError: false, errorMessage: '' };
        this.isValidSubmit = true;
        this.bottomSearchForm.controls.toDateFormControl.setErrors(null);
        if (new Date(this.toDateFormControl.value) > this.currDate || new Date(this.toDateFormControl.value) < this.twoYearDate) {
          this.invalidToDateError = { isError: true, errorMessage: Constants.DATERANGE_ERR_MSG };
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
      this.invalidFromGreaterToError = { isError: true, errorMessage: Constants.DATEGREATER_ERR_MSG };
      this.bottomSearchForm.controls.fromDateFormControl.setErrors({ 'incorrect': true });
      this.isValidSubmit = false;
    } else {
      this.invalidFromGreaterToError = { isError: false, errorMessage: '' };
      this.bottomSearchForm.controls.fromDateFormControl.setErrors(null);
      this.isValidSubmit = true;
    }
  }

  transformDate(fulldatevalue: Date): string {
    return (new DatePipe(Constants.DATEPIPE_US)).transform(fulldatevalue, Constants.CALENDARPICKER_FORMAT);
  }

  transformNoSlashDate(fulldatevalue: Date): string {
    return (new DatePipe(Constants.DATEPIPE_US)).transform(fulldatevalue, Constants.DATE_NOSLASH_FORMAT);
  }

}
