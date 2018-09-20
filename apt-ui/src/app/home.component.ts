import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'apt-client';
  pcodeInParent = '';
  bsparamsInParent = '';
  clearAllSignalInParent: boolean;

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
