import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Save As</h4>
   
       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
   </button>
    </div>
    <div class="modal-body">
      <p>PL-2019.11.789456</p>
    </div>
    <div class="modal-footer">
    <div> Your picture wil be under "Unprocessed Packing Slip" section after you save it.</div>
      <button type="button" class="btn btn-outline-dark" (click)="navigate()">Save</button>
    </div>
  `
})

export class PopupComponent implements OnInit {

  @Input() name;

  ngOnInit() {
  }
  constructor(public activeModal: NgbActiveModal) {}

}
