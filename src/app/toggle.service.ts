import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'


@Injectable()
export class ToggleService {
  public toggleThePannel = new Subject();

  constructor() { }

}
