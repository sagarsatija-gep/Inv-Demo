import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'success-popUp',
    templateUrl: './successPopUp.component.html',
    styleUrls: ['./successPopUp.component.scss']
})
export class SuccessPopUp implements OnInit {
@Input() name;

    constructor(public activeModal: NgbActiveModal){}
    ngOnInit() {}

}