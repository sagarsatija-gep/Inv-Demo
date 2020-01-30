import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'rfidPopUp',
    templateUrl: './rfidPopUp.component.html',
    styleUrls: ['./rfidPopUp.component.scss']
})
export class RfidPopUpComponent implements OnInit{
    @Input() name;
   
    constructor(public activeModal: NgbActiveModal, private route: Router){}
    ngOnInit() {
        debugger;
        console.log(name);
        // this.name = [
        //     {
        //         id: ['rhaiukdsklfj']
        //     },
        //     {
        //         id: ['rhaiukdsklfj']
        //     },
        //     {
        //         id: ['rhaiukdsklfj']
        //     }
        // ]
    }

    successOk() {
        // this.activeModal.dismiss('Cross click');
            this.activeModal.close();
        // this.route.navigate(['/home']);
    }
}