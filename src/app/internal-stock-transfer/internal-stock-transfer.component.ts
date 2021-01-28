import { SuccessPopUp } from './../../shared/popUpComponent/successPopUp/successPopUP.component';
import { Router } from '@angular/router';
import { PopUpService } from './../../shared/form-widget/service/popUp.service';
import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-internal-stock-transfer',
  templateUrl: './internal-stock-transfer.component.html',
  styleUrls: ['./internal-stock-transfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternalStockTransferComponent implements OnInit, OnDestroy {

  popUpSubscription: Subscription;

  constructor(public modalService: NgbModal, private popup: PopUpService, private route: Router) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent2, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  successPopUp() {
    const modalRef = this.modalService.open(SuccessPopUp, { size: 'lg' });
    modalRef.componentInstance.name = 'Stock Transfer Initiated successfully.';

  }

  ngOnInit() {
    this.popUpSubscription = this.popup.internalStockPopUp.subscribe(isPopUP => {
      if (isPopUP) {
        this.open();
      }
    })
  }

  isFinalizeClick() {
    if (!this.popup.isInternalStockErrorPopUp) {
      this.popup.isInternalStockErrorPopUp = true;
      this.open();
    } else {
      this.successPopUp();
      // this.route.navigate(['/home']);
    }
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
              type: 'text',
              name: 'Document Name',
              values: 'Stock Transfer Document',
            },
            {
              type: 'text',
              name: 'Document Number',
              values: 'STK-545502',
            }, {
              type: 'text',
              name: 'Created By',
              values: 'Emily ross',
            },
            {
              type: 'text',
              name: 'Document Status',
              values: 'Draft',
            },
            {
              type: 'text',
              name: 'Company Code',
              values: 'UP Company',
            },
            {
              type: 'textbox',
              name: 'Plant',
              values: 'Montney, CA'
            },
            {
              type: 'dropdown',
              name: 'Transfer Type',
              value: [
                'Within Plant Transfer',
                'Between Plant Transfer'
              ],
              selectedValue: 'Within Plant Transfer',
            },
            {
              type: 'barcode',
              name: 'BarCode',
              value: '1232',
              editable: true,
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
        popup: true,
        data: {
          componentName: 'Attachement',
          numberOfInput: 'one',
          page: 'internalStockTaransfer'
        }
      }
    }
  ]

}
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'internal-stock-transfer-popup.html',
  styleUrls: ['./internal-stock-transfer.component.css']
})
export class NgbdModalContent2 implements OnInit {
  @Input() name;

  isErroPopUp: boolean;
  popupData = [
    {
      type: 'dropdown',
      name: 'From Storage Location',
      values: ['PMF-6002​'],
      selectedValue: 'PMF-6002​',
      showBarcode: true
    },
    {
      type: 'dropdown',
      name: 'From BIN',
      values: ['C02-08-2-2', 'N02-06-3-2'],
      selectedValue: '',
      showBarcode: true
    },
    {
      type: 'text',
      name: 'Select Line Items',
      values: '',
      showBarcode: true
    },
    {
      type: 'text',
      name: 'Quantity',
      values: '',
      showBarcode: false
    },
    {
      type: 'dropdown',
      name: 'To Storage Location',
      values: ['PMF-6002​'],
      selectedValue: 'PMF-6002​',
      showBarcode: false
    },
    {
      type: 'dropdown',
      name: 'To BIN',
      values: ['N02-06-3-2', 'N02-06-6-4'],
      selectedValue: '',
      showBarcode: true
    }
    // ,
    // {
    //   type:'dropdown',
    //   name: 'To Plant',
    //   values: [
    //     'Calagary',
    //     'Canol',
    //     'Montney',
    //     'Muskwa',
    //     'Duvernay',
    //     'Beaufort Sea',
    //     'Surmont'
    //   ],
    //   selectedValue: ' ​',
    //   showBarcode: false
    // }
  ];

  selectedCountry: any;

  cities = {};

  countries = [{
    id: 1, name: 'France', cities: ['Paris', 'Marseille', 'Nice']
  },
  {
    id: 2, name: 'Germany', cities: ['Hamburg', 'Berlin', 'Munich']
  },
  {
    id: 3, name: 'Italy', cities: ['Roma', 'Milan', 'Napoli']
  },
  ];

  constructor(public activeModal: NgbActiveModal, private popUpServices: PopUpService, private route: Router) { }

  ngOnInit(): void {
    if(this.route.url.split('/')[1] == 'externalStockTransfer') {
      this.popupData = [
        {
          type: 'dropdown',
          name: 'From Storage Location',
          values: ['PMF-6002​'],
          selectedValue: 'PMF-6002​',
          showBarcode: true
        },
        {
          type: 'dropdown',
          name: 'From BIN',
          values: ['C02-08-2-2', 'N02-06-3-2'],
          selectedValue: '',
          showBarcode: true
        },
        {
          type: 'text',
          name: 'Select Line Items',
          values: '',
          showBarcode: true
        },
        {
          type: 'text',
          name: 'Quantity',
          values: '',
          showBarcode: false
        },
        {
          type: 'dropdown',
          name: 'To Storage Location',
          values: ['PMF-6002​'],
          selectedValue: 'PMF-6002​',
          showBarcode: false
        },
        {
          type: 'dropdown',
          name: 'To BIN',
          values: ['N02-06-3-2', 'N02-06-6-4'],
          selectedValue: '',
          showBarcode: true
        },
        {
          type:'dropdown',
          name: 'To Plant',
          values: [
            'Calagary',
            'Canol',
            'Montney',
            'Muskwa',
            'Duvernay',
            'Beaufort Sea',
            'Surmont'
          ],
          selectedValue: ' ​',
          showBarcode: false
        }
      ];
    } else {
      this.isErroPopUp = this.popUpServices.isInternalStockErrorPopUp;
    }
  }

  showTable() {
    debugger
    this.activeModal.close();
    this.popUpServices.convertBarcodeScanetoArray(this.popupData[2].values);
    // this.popUpServices.filteredExternalTableData();
    this.popUpServices.showTable();
  }

  closePopup() {
    this.activeModal.close();
  }

}


