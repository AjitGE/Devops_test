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
}
