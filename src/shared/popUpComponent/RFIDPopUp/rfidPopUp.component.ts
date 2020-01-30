import { PopUpService } from './../../form-widget/service/popUp.service';
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
    
    dataRfid=[];

    dataForRfid=[];

    constructor(public activeModal: NgbActiveModal, private route: Router, private popUpService: PopUpService){}
    ngOnInit() {
        debugger;
        console.log(name);
        this.name.map(data=>{
            this.dataRfid.push(data.id);
        })
        const RFC_COLUMN = this.popUpService.externalTableData.colConfig.length;
        this.popUpService.externalTableData.values.map(data=>{
            const keyValue = data[RFC_COLUMN - 2].value;
            console.log(keyValue);
            if( this.dataRfid.includes(keyValue) ) {
                this.dataForRfid.push({
                    'id': keyValue,
                    // 'number': data[2].value,
                    'des': data[3].value
                } )
            }

        })

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