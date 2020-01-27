import { PopUpService } from './../../shared/form-widget/service/popUp.service';
import { Component, OnInit ,ViewEncapsulation,Input, OnDestroy} from '@angular/core';
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

  constructor(public modalService: NgbModal, private popup: PopUpService) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent2, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
    this.popUpSubscription = this.popup.internamStockPopUp.subscribe(isPopUP=>{
      if(isPopUP) {
        this.open();
      }
    })
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
              values:'El-Segundo'
            }
            
          ]
        }
      }
    },
  {
    'HeaderData': {
      name: 'Notes & Attachements',
      isOpen: true,
      collapsible: true,
      data: {
        componentName: 'Attachement',
        numberOfInput: 'one'
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

  popupData = [
    {
      type:'text',
      name: 'From Storage Location',
      values: 'PMF-6002​',
      showBarcode: 'none'
    },
    {
      type:'text',
      name: 'From BIN',
      values: '',
    },
    {
      type:'text',
      name: 'Line Items',
      values: '',
    },
    {
      type:'text',
      name: 'Quantity',
      values: '',
    },
    {
      type:'text',
      name: 'To Storage Location',
      values: 'PMF-6002​​',
    },
    {
      type:'text',
      name: 'To Bin',
      values: '​​',
    }
  ];

  constructor(public activeModal: NgbActiveModal, private popUpServices: PopUpService ) {}

  ngOnInit(): void {
    
  }

  showTable() {
    this.activeModal.close();
    this.popUpServices.showTable();
  }

}


