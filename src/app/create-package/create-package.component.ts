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
        collapsible: true,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type: 'text',
              name: 'Package Name',
              values: 'Container 1',
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
              values: 'Chevron Refining',
            },
            {
              type: 'textbox',
              name: 'Plant',
              values: 'PMF 6002'
            },
            {
              type: 'dropdown',
              name: 'Transfer Type',
              value: [
                'Within Plant Transfer',
                'Between Plant Transfer'
              ],
              selectedValue: 'Within Plant Transfer',
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
          page: 'internalStockTaransfer'
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


