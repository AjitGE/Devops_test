import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
  })
export class IcommunicationService
{
    private messageSource = new BehaviorSubject<string>("");

    currentMessage = this.messageSource.asObservable();

    constructor() {}

    changeMessage(message:string)
    {
        this.messageSource.next(message);
    }
}