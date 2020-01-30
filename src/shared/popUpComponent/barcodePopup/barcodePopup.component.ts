import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'barcode-popUp',
    templateUrl: './barcodePopup.component.html',
    styleUrls: ['./barcodePopup.component.scss']
})
export class barcodePopup implements OnInit {
@Input() name;

    constructor(public activeModal: NgbActiveModal, private route: Router){}
    ngOnInit() {}

    successOk() {
        this.activeModal.dismiss('Cross click');
        // this.route.navigate(['/home']);
    }

}