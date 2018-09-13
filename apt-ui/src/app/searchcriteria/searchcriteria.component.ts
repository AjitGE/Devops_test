import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {

  constructor() { }

  bottomSearchForm: FormGroup;
  keywordtext: FormControl;
  targetedOnlychkbx: FormControl;
  nontargetedOnlychkbx: FormControl;
  currpromosOnlychkbx: FormControl;
  partnercodetext: FormControl;

  removable = true;
  selectable = true;
  keywordsarray: string[] = [];

  @Output() bottomSearchParams: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendClearAllReq: EventEmitter<boolean> = new EventEmitter<boolean>();
  clearallflag = false;

  ngOnInit() {

    this.keywordtext = new FormControl('', [Validators.minLength(2), Validators.maxLength(5),
      Validators.pattern('[a-zA-Z0-9,]*')]);

    this.targetedOnlychkbx = new FormControl(false);
    this.nontargetedOnlychkbx = new FormControl(false);
    this.currpromosOnlychkbx = new FormControl(false);
    this.partnercodetext = new FormControl('', [Validators.pattern('[a-zA-Z]*')]);
    this.bottomSearchForm = new FormGroup({
      keywordtext: this.keywordtext,
      targetedOnlychkbx: this.targetedOnlychkbx,
      nontargetedOnlychkbx: this.nontargetedOnlychkbx,
      currpromosOnlychkbx: this.currpromosOnlychkbx,
      partnercodetext: this.partnercodetext
    });
  }

  clickedPlus(): void {
    const keywordstring: string = this.bottomSearchForm.get('keywordtext').value;
    const splstring = keywordstring.split(',');
    for ( let i = 0 ; i < splstring.length ; i++) {
      console.log('split string values are :' + splstring[i]);
      const value = splstring[i];
      if (this.keywordsarray.length === 10) {
        this.keywordtext.setValidators([Validators.required]);
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
    if (this.bottomSearchForm.valid) {
      console.log('Inside valid form of bottom search');
    }

  }

  clearAllClicked(event: Event) {
    this.clearallflag = !this.clearallflag;
    this.sendClearAllReq.emit(this.clearallflag);
  }
}
