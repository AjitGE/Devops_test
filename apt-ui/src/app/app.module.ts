import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { SearchcompComponent } from './searchcomp/searchcomp.component';
import { ResultscompComponent } from './resultscomp/resultscomp.component';
import { LatestpromosComponent } from './resultscomp/latestpromos.component';
import { TrendingpromosComponent } from './resultscomp/trendingpromos.component';
import { SearchresultsComponent } from './resultscomp/searchresults.component';
import { SearchserviceService } from './searchservice.service';
import { IcommunicationService } from './shared/icommunication.service';

import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';

import { ErrorHandler } from './errorservice/error_handler';
import { RequestInterceptor } from './errorservice/http_interceptor';
import { PromodetailsComponent } from './resultscomp/promodetails/promodetails.component';
import { HomeComponent } from './home.component';
import { HealthComponent } from './health/health.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchcompComponent,
    ResultscompComponent,
    SearchcriteriaComponent,
    LatestpromosComponent,
    TrendingpromosComponent,
    SearchresultsComponent,
    PromodetailsComponent,
    HomeComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    TextMaskModule
  ],
  providers: [SearchserviceService, IcommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
