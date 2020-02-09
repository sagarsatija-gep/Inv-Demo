import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from "@angular/core";
import { PopUpService } from '../../form-widget/service/popUp.service';

@Component({
    selector: 'barcode-popUp',
    templateUrl: './barcodePopup.component.html',
    styleUrls: ['./barcodePopup.component.scss']
})
export class barcodePopup implements OnInit {
@Input() name;

    constructor(public activeModal: NgbActiveModal, private route: Router, private porUpService: PopUpService){}
    ngOnInit() {}

    successOk(e) {
        console.log(this.name)
        this.activeModal.dismiss('Cross click');
        // this.route.navigate(['/home']);

        this.porUpService.barCodePopUpDataForAssetDataChange(name);
        this.porUpService.barCodePopUpDataForLinesDataChange(name);
    }

}