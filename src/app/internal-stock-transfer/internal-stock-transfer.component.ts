import { Component, OnInit ,ViewEncapsulation,Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-internal-stock-transfer',
  templateUrl: './internal-stock-transfer.component.html',
  styleUrls: ['./internal-stock-transfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternalStockTransferComponent implements OnInit {

  constructor(public modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent2, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
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
        componentName: 'Attachement'
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
export class NgbdModalContent2 {
  @Input() name;

  popupData = [
    {
      type:'text',
      name: 'From Storage Location',
      values: 'PMF-6002​',
      showBarcode: true
    },
    {
      type:'text',
      name: 'From BIN',
      values: '',
      showBarcode: true
    },
    {
      type:'text',
      name: 'Line Items',
      values: '',
      showBarcode: false
    },
    {
      type:'text',
      name: 'Quantity',
      values: '',
      showBarcode: false
    },
    {
      type:'text',
      name: 'To Storage Location',
      values: 'PMF-6002​​',
      showBarcode: false
    },
    {
      type:'text',
      name: 'To Bin',
      values: '​​',
      showBarcode: false
    }
  ];

  constructor(public activeModal: NgbActiveModal) {}
}


