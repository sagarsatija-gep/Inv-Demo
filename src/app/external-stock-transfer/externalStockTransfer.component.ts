import { NgbdModalContent2 } from './../internal-stock-transfer/internal-stock-transfer.component';
import { Router } from '@angular/router';
import { PopUpService } from './../../shared/form-widget/service/popUp.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
    selector: 'external-stock-transfer',
    templateUrl: './externalStockTransfer.component.html',
    styleUrls: ['./externalStockTransfer.component.scss']
})
export class ExternalStockTransfer implements OnInit {

    popUpSubscription: Subscription;

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
      })
    }
  
    isFinalizeClick() {
        this.route.navigate(['/home']);
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
                values: 'Chevron Refining',
              },
              {
                type: 'textbox',
                name:'Plant',
                values:'PMF 6002'
              },
              {
                type: 'dropdown',
                name: 'Transfer Type',
                value: [
                  'Within Plant Transfer',
                  'Between Plant Transfer'
              ],
                selectedValue:'Between Plant Transfer',
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