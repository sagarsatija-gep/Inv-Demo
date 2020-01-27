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
    const modalRef = this.modalService.open(NgbdModalContent2);
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
  template: `
    
    <div class="modal-body">
    <div>
      <div><label >From Storage Location</label></div>
      <input type='text'>
    </div>  
    </div>
    <div class="modal-footer">
  
      <button type="button" class="btn btn-outline-dark" (click)="navigate()">Save</button>
    </div>
  `
})
export class NgbdModalContent2 {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


