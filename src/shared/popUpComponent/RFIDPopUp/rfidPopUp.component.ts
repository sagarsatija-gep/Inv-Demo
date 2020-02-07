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

    rfIdName = [
        "container 1",
        "E-MONT_KS-PANZERROHR_DN20", 
        "KIT,ANALYSIS,HEATER TUBE & FILTER,MFR UN ",
        "MILLIPORE AAWP04700", 
        "Container 2",
        "BRACKET ASSEMBLY", 
        "Electric Tool 48-20-5030", 
        "Morse Cutting Tools 82062"
    ];

    constructor(public activeModal: NgbActiveModal, private route: Router, private popUpService: PopUpService){}
    ngOnInit() {
        debugger;
        console.log(name);
        this.name.map(data=>{
            this.dataRfid.push(data.id);
        })
        const RFC_COLUMN = this.popUpService.externalTableData.colConfig.length;
        // this.popUpService.externalTableData.values.map(data=>{
        //     const keyValue = data[RFC_COLUMN - 2].value;
        //     console.log(keyValue);
        //     if( this.dataRfid.includes(keyValue) ) {
        //         this.dataForRfid.push({
        //             'id': keyValue,
        //             'des': data[3].value
        //         } )
        //     }

        // })

    }

    successOk() {
            this.activeModal.close();
    }
}