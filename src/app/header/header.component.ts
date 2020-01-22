import { Component, OnInit,Input } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleThePage = false;
  popup:boolean=true;

  constructor(private toggleService: ToggleService,public modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent1);
    modalRef.componentInstance.name = 'World';
  }

  toggle() {
    this.toggleThePage = !this.toggleThePage;
    this.toggleService.toggleThePannel.next(this.toggleThePage);
  }
}
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Capture Your Document</h4>
       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
   </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent1 {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


