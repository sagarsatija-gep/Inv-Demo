import { Router } from '@angular/router';
import { PopUpService } from './../../shared/form-widget/service/popUp.service';
import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePackageComponent implements OnInit, OnDestroy {

  popUpSubscription: Subscription;

  toastPopupData = {
    image: true,
    img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/success.png",
    value: "Shipment Package C-4403314 created successfully."
};
showPopUp;
  constructor(public modalService: NgbModal, private popup: PopUpService, private route: Router) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContentCreatePackage, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  printRfid() {

    let printContents, popupWin;
    printContents = document.getElementById('print-section-rfid').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=1920px,width=1080px');
    popupWin.document.open();
    popupWin.document.write(`
<html>
  <head>
    <style>
    body{  width: 99%;}
      label { font-weight: 400;
              font-size: 13px;
              padding: 2px;
              margin-bottom: 5px;
            }
      table, td, th {
             border: 1px solid silver;
              }
              table td {
             font-size: 13px;
              }

               table th {
             font-size: 13px;
              }
        table {
              border-collapse: collapse;
              width: 98%;
              }
          th {
              height: 26px;
              }
    </style>
  </head>
<body onload="window.print();window.close()">${printContents}</body>
</html>`);
    popupWin.document.close();

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
      this.route.navigate(['/home']);
    }
  }

  ngOnDestroy() {
    this.popUpSubscription.unsubscribe();
  }

  widgetData = [
    {
      'HeaderData': {
        name: 'Basic Details',
        isOpen: true,
        collapsible: false,
        data: {
          componentName: 'goodsIssueDetails',
          isSubDetails: false,
          data: [
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Package Name',
                  value: 'Shipment package – 5504',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'dropdown',
                  name: 'Type',
                  value: [
                    'Container',
                    'Vessel',
                    'Pallet'
                  ],
                  selectedValue: 'Container',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              classes: 'bg-gray',
              data: [
                {
                  type: 'textBox',
                  name: 'Document Number',
                  value: 'C-4403314',
                  editable: true,
                },
                {
                  type: 'barcode',
                  name: 'BarCode',
                  value: 'C-4403314',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              classes: 'bg-gray',
              data: [
                {
                  type: 'textBox',
                  name: 'Plant Code',
                  value: 'Canol, CA',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              classes: 'bg-gray',
              data: [
                {
                  type: 'textBox',
                  name: 'Storage Location',
                  value: 'CA-55043',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              classes: 'bg-gray',
              data: [
                {
                  type: 'textBox',
                  name: 'Storage Bin',
                  value: 'C03 - 06- 2- 2',
                  editable: true,
                }
              ]
            }
          ]
        }
      }
    },
    // {
    //   'HeaderData': {
    //     name: 'Line Details',
    //     isOpen: true,
    //     collapsible: true,
    //     data: {
    //       componentName: 'Attachement',
    //       numberOfInput: 'one',
    //       // page: 'internalStockTaransfer'
    //     }
    //   }
    // }
    {
      'HeaderData': {
        name: 'Line Details',
        collapsible: true,
        isOpen: true,
        barcode:true,
        data: {
          componentName: 'tabComponent',
          haveButton: false,
          route: "createPackage",
          data: [
            {
              tabName: 'LINES',
              tabcomponent: 'widgetTable',
              tabData: {
                tablerowClass: 'bg-white',
                colConfig: [
                  {
                    type: 'text',
                    name: 'Line Number',
                  },
                  {
                    type: 'text',
                    name: 'Item Number',
                  },
                  {
                    type: 'text',
                    name: 'Item Name',
                  },
                  {
                    type: 'text',
                    name: 'Quantity',
                  },
                  {
                    type: 'text',
                    name: 'RFID Flag',
                  }
                ],
                route: "poGoodsReceipt",
                values:[
                  [
                  {
                    type: 'text',
                    value: '1'
                  },
                  {
                    type: 'textboxchange',
                    value: '53257890'
                  },
                  {
                    type: 'textbox',
                    value: 'Morse Cutting Tools 82062',
                    styles: { 'width': '240px' }
                  },
                  {
                    type: 'textbox',
                    value: '9',
                    classes: 'rounded-sm border-secondary input-small text-right'
                  },
                  {
                    type: 'textbox',
                    value: '3531313832393339',
                    styles: { 'width': '210px' }
                  }
                ]

                ],
                values1: [
                  [
                    {
                      type: 'text',
                      value: '1'
                    },
                    {
                      type: 'textboxchange',
                      value: '53219023',
                    },
                    {
                      type: 'textbox',
                      value: 'E-MONT_KS-PANZERROHR_DN20',
                      styles: { 'width': '240px' }
                    },
                    {
                      type: 'textbox',
                      value: '5',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '00000000000000000A101058',
                      styles: { 'width': '210px' }
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '2'
                    },
                    {
                      type: 'textboxchange',
                      value: '59867631',
                    },
                    {
                      type: 'textbox',
                      value: 'KIT,ANALYSIS,HEATER TUBE & FILTER,MFR UN ',
                      styles: { 'width': '240px' }
                    },
                    {
                      type: 'textbox',
                      value: '5',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: 'E69FA0FA2C6FA0FA2C6F80CB',
                      styles: { 'width': '210px' }
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '5'
                    },
                    {
                      type: 'textboxchange',
                      value: '53987943',
                    },
                    {
                      type: 'textbox',
                      value: 'MILLIPORE AAWP04700',
                      styles: { 'width': '240px' }
                    },
                    {
                      type: 'textbox',
                      value: '5',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '3833333132393337',
                      styles: { 'width': '210px' }
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '4'
                    },
                    {
                      type: 'textboxchange',
                      value: '55689678',
                    },
                    {
                      type: 'textbox',
                      value: 'BRACKET ASSEMBLY',
                      styles: { 'width': '240px' }
                    },
                    {
                      type: 'textbox',
                      value: '5',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: 'E2801160600002052A5B5541',
                      styles: { 'width': '210px' }
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '5'
                    },
                    {
                      type: 'textboxchange',
                      value: '54688622'
                    },
                    {
                      type: 'textbox',
                      value: 'Electric Tool 48-20-5030',
                      styles: { 'width': '240px' }
                    },
                    {
                      type: 'textbox',
                      value: '5',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '3239343738313139',
                      styles: { 'width': '210px' }
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '6'
                    },
                    {
                      type: 'textboxchange',
                      value: '53257890'
                    },
                    {
                      type: 'textbox',
                      value: 'Morse Cutting Tools 82062',
                      styles: { 'width': '240px' }
                    },
                    {
                      type: 'textbox',
                      value: '9',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '3531313832393339',
                      styles: { 'width': '210px' }
                    }
                  ]
                ]
              }
            }
          ]
        }
      }
    }
  ];

  onFinlizedClick() {

    this.showPopUp = true;
    setTimeout(() => {
        this.route.navigate(['/home']);
  }, 2000)

  }
}
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'create-package-popup.html',
  styleUrls: ['./create-package.component.css']
})
export class NgbdModalContentCreatePackage implements OnInit {
  @Input() name;

  isErroPopUp: boolean;
  popupData = [
    {
      type: 'text',
      name: 'From Storage Location',
      values: 'PMF-6002​',
      showBarcode: true
    },
    {
      type: 'text',
      name: 'From BIN',
      values: '',
      showBarcode: true
    },
    {
      type: 'text',
      name: 'Line Items',
      values: '',
      showBarcode: false
    },
    {
      type: 'text',
      name: 'Quantity',
      values: '',
      showBarcode: false
    },
    {
      type: 'text',
      name: 'To Storage Location',
      values: 'PMF-6002​​',
      showBarcode: false
    },
    {
      type: 'text',
      name: 'To Bin',
      values: '​​',
      showBarcode: false
    }
  ];

  constructor(public activeModal: NgbActiveModal, private popUpServices: PopUpService) { }

  ngOnInit(): void {
    this.isErroPopUp = this.popUpServices.isInternalStockErrorPopUp;
  }

  showTable() {
    this.activeModal.close();
    this.popUpServices.showTable();
  }

}