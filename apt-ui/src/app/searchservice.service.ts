import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPromotion } from './resultscomp/promotion';
import { environment } from '../environments/environment';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private httpClient: HttpClient) { }

  getSearchPromoResults(pcode: string): Observable<IPromotion[]> {
    return this.httpClient.get<IPromotion[]>(environment.backendUrl + '/api/search/' + pcode, { responseType: 'json' })
      .pipe(catchError(this.errorHandler))
      ;
  }

  getCriteriaSearchPromoResults(bsparams: string): Observable<IPromotion[]> {
    return this.httpClient.get<IPromotion[]>(environment.backendUrl + '/criteria/search/' + bsparams, { responseType: 'json' })
      .pipe(catchError(this.errorHandler));
  }

  getServicesPing() {
    return this.httpClient.get(environment.backendUrl + '/api/hello/', {responseType: 'text'})
      .pipe(catchError(this.errorHandler));
  }

  getPromoDetailResults(promoCode: string): Observable<IPromotion> {
    return this.httpClient.get<IPromotion>(environment.backendUrl + '/api/promodetail/' + promoCode, {responseType: 'json'})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    // return observableThrowError(error.message || 'Server Error');
    return observableThrowError(error);
  }

}
