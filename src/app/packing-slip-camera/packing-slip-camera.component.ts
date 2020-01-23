
import { Component, ViewChild, AfterViewInit,OnInit ,Input } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-packing-slip-camera',
  templateUrl: './packing-slip-camera.component.html',
  styleUrls: ['./packing-slip-camera.component.css']
})
export class PackingSlipCameraComponent implements OnInit {

  constructor(public modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

   @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;
  
  barcodeValue;
  ngOnInit(){
  this.startQuagga();
}
  ngAfterViewInit() {
      this.barecodeScanner.stop();
  }
startQuagga(){
  this.barecodeScanner.start()
}
  stopQuagga(){
    this.barecodeScanner.stop()
  }
  onValueChanges(result){
      this.barcodeValue = result.codeResult.code;
      this.barecodeScanner.stop()
  }

}

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
export class NgbdModalContent {
  @Input() name;
  navigate(){
    console.log("()_")
    this.router.navigate(['/','managePackingList']);
    this.activeModal.dismiss('Cross click')
  }

  constructor(public activeModal: NgbActiveModal,public router:Router) {}
}


 

