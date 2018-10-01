import { Component } from '@angular/core';
import { Constants } from './shared/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = Constants.APP_TITLE;
  header_txt = Constants.APP_HEADER_TEXT;
  pcodeInParent = '';
  bsparamsInParent = '';
  clearAllSignalInParent: boolean;

  onPcodeSubmited(pcodecurrpromo: string): void {
    this.pcodeInParent = pcodecurrpromo;
  }

  handleClearAllReq(clearallsignal: boolean): void {
    clearallsignal = Object.assign({}, clearallsignal);
    this.clearAllSignalInParent = clearallsignal;
  }

  onBSparamsSubmitted(bsparams: string): void {
    this.bsparamsInParent = bsparams;
  }

}
