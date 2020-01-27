import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable()
export class BarcodeValueService {

  private messageSource =  new BehaviorSubject<string>(null);
  currentmessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message){
   this.messageSource.next(message) 
  }
}
