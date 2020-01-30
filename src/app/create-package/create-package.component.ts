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

  constructor(public modalService: NgbModal, private popup: PopUpService, private route: Router) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContentCreatePackage, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
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
                  value: 'Container 1',
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
                  value: 'PMF - 6002',
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
                  value: '6002',
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
        data: {
          componentName: 'tabComponent',
          haveButton: false,
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
                values: [
                  [
                    {
                      type: 'text',
                      value: '1'
                    },
                    {
                      type: 'textboxchange',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: ''
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: '',
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '2'
                    },
                    {
                      type: 'textboxchange',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: ''
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: '',
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '3'
                    },
                    {
                      type: 'textboxchange',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: ''
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: '',
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '4'
                    },
                    {
                      type: 'textboxchange',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: ''
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: ''
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '5'
                    },
                    {
                      type: 'textboxchange',
                      value: ''
                    },
                    {
                      type: 'textbox',
                      value: ''
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: '',
                    }
                  ]
                ]
              }
            }
          ]
        }
      }
    }
  ]
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