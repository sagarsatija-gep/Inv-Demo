import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class PopUpService {
    internamStockPopUp = new Subject<boolean>();
    attachmentTable = new Subject<boolean>();

    internalStockPopupOpen() {
        this.internamStockPopUp.next(true);
    }

    showTable() {
        this.attachmentTable.next(true);
    }

}