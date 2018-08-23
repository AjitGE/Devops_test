import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
 
import { Observable, of, empty, } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
 
import { ErrorHandler } from './error_handler';

 
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
 
  constructor(
    public errorHandler : ErrorHandler,
  ) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
 
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.errorHandler.handleError(err);
          }
        })
    );

    }
    
}