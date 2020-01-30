import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs'
@Injectable()
export class BarcodeValueService {

  private messageSource =  new BehaviorSubject<string>(null);
  private tableSource =  new BehaviorSubject<string>(null);
  currentmessage = this.messageSource.asObservable();
  tablemessage = this.tableSource.asObservable();

  tableBarCode = new Subject<string>();

  constructor() { }
  changeMessage(message){
    debugger;
   this.messageSource.next(message) ;
  }
  changetable(message){
    debugger
    this.tableBarCode.next(message); 
   }
}
