import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IPromotion } from './resultscomp/promotion';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private httpClient: HttpClient) { }

  getSearchPromoResults(pcode: String): Observable<IPromotion> {
    console.log('Sending HTTP requst to SpringBoot', pcode);
     return this.httpClient.get<IPromotion>("/api/search/"+pcode, {responseType: 'json'})
     .pipe(catchError(this.errorHandler))
     ;
  }

  errorHandler(error:HttpErrorResponse)
  {
    //return observableThrowError(error.message || 'Server Error');
    return observableThrowError(error);
  }

}
