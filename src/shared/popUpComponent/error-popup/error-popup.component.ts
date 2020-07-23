import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'error-popup',
    templateUrl: './error-popup.component.html',
    styleUrls: ['./error-popup.component.scss']
})
export class ErrorPopup implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal, private route: Router){}
    ngOnInit() {}

    error() {
        this.activeModal.dismiss('Cross click');
        // this.route.navigate(['/home']);
    }

}