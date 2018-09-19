import { Component } from '@angular/core';
import { ISearchPromoModel } from './shared/searchpromomodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apt-client';
  pcodeInParent = '';
  bsparamsInParent = '';
  clearAllSignalInParent: boolean;
  searchPromoModelInParent: ISearchPromoModel;

  onClick(): void {
    console.log('Clicked');
  }

  onPcodeSubmited(pcodecurrpromo: string): void {
    this.pcodeInParent = pcodecurrpromo;
    console.log('pcode in Parent :' + this.pcodeInParent);
  }

  handleClearAllReq(clearallsignal: boolean): void {
    this.clearAllSignalInParent = clearallsignal;
  }

  onBSparamsSubmitted(bsparams: string): void {
    this.bsparamsInParent = bsparams;
    console.log('bsparams in parent: ' + this.bsparamsInParent);
  }
}
