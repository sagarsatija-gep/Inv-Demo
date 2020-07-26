import { RfidPopUpComponent } from './../../shared/popUpComponent/RFIDPopUp/rfidPopUp.component';
import { SuccessPopUp } from './../../shared/popUpComponent/successPopUp/successPopUP.component';
import { NgbdModalContent2 } from './../internal-stock-transfer/internal-stock-transfer.component';
import { Router } from '@angular/router';
import { PopUpService } from './../../shared/form-widget/service/popUp.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
    selector: 'external-stock-transfer',
    templateUrl: './externalStockTransfer.component.html',
    styleUrls: ['./externalStockTransfer.component.css']
})
export class ExternalStockTransfer implements OnInit {

    popUpSubscription: Subscription;
//this
    constructor(public modalService: NgbModal, private popup: PopUpService, private route: Router) { }
    open() {
      const modalRef = this.modalService.open(NgbdModalContent2, { size: 'lg' });
      modalRef.componentInstance.name = 'World';
    }
  
    ngOnInit() {
      this.popUpSubscription = this.popup.internalStockPopUp.subscribe(isPopUP=>{
        if(isPopUP) {
          this.open();
        }
      });
      this.popup.rfidPopUp.subscribe(isPopUp => {
          if(isPopUp) {
              this.rfidPopUp();
          }
      })
    }
  
    isFinalizeClick() {
        // this.route.navigate(['/home']);
        this.successPopUp();
    }

    //this
    successPopUp() {
        const modalRef = this.modalService.open(SuccessPopUp, { size: 'lg' });
        modalRef.componentInstance.name = 'Stock Transfer Initiated successfully.';
        
      }

    rfidPopUp() {
        // this.popup.apiCallForBarCodeNumber();
        // this.popup.rfidGlob.subscribe(rfid => {
        //     const modalRef = this.modalService.open(RfidPopUpComponent, { size: 'lg' });
        //     modalRef.componentInstance.name = rfid.data;
        // })
        // this.popup.rfidGlob.subscribe()
    }
  
    ngOnDestroy() {
      this.popUpSubscription.unsubscribe();
    }
  
    widgetData = [
      {
        'HeaderData': {
          name: 'Header Details',
          isOpen: true,
          collapsible: true,
          data: {
            componentName: 'details',
            isSubDetails: false,
            data: [
              {
                type:'text',
                name: 'Document Name',
                values: 'Stock Transfer Document',
              },
              {
                type:'text',
                name: 'Document Number',
                values: 'STK-545502',
              },{
                type:'text',
                name: 'Created By',
                values: 'Emily ross',
              },
              {
                type:'text',
                name: 'Document Status',
                values: 'Draft',
              },
              {
                type:'text',
                name: 'Company Code',
                values: 'ConocoPhillips',
              },
              {
                type: 'dropdown',
                name:'Plant',
                value:[
                  'Calagary',
                  'Canol',
                  'Montney',
                  'Muskwa',
                  'Duvernay',
                  'Beaufort Sea',
                  'Surmont'
                ],
                selectedValue: 'Calagary'
              },
              {
                type: 'dropdown',
                name: 'Transfer Type',
                value: [
                  'Within Plant',
                  'Plant to Plant',
                  'Project to Project',
              ],
                selectedValue:'Within Plant',
              }
              
            ]
          }
        }
      },
      {
        'HeaderData': {
          name: 'Line Details',
          isOpen: true,
          collapsible: true,
          data: {
            componentName: 'Attachement',
            numberOfInput: 'one',
            page: 'externalStockTaransfer'
          }
        }
      }
  ]
  
}