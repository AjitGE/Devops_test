import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';

import { SearchcompComponent } from './searchcomp/searchcomp.component';
import { ResultscompComponent } from './resultscomp/resultscomp.component';
import { SearchserviceService } from './searchservice.service';
import { IcommunicationService } from './shared/icommunication.service';

import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';

import { ErrorHandler } from './errorservice/error_handler';
import { RequestInterceptor } from './errorservice/http_interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SearchcompComponent,
    ResultscompComponent,
    SearchcriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [SearchserviceService, IcommunicationService,ErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
