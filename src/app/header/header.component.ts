import { Router } from '@angular/router';
import {
  Component,
  ViewChild,
  OnInit,
  Input
} from '@angular/core';
import {
  ToggleService
} from '../toggle.service';
import {
  BarecodeScannerLivestreamComponent
} from 'ngx-barcode-scanner';
import {
  NgbActiveModal,
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  BarcodeValueService
} from '../barcode-value.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleThePage = false;
  popup: boolean = true;
  opened: boolean = true;
  barcodeValue;
  
  click() {
    this.opened = !this.opened;
  }
  constructor(private toggleService: ToggleService, public modalService: NgbModal, public barcode: BarcodeValueService, private route: Router) {}

  ngOnInit() {
    this.barcode.currentmessage.subscribe(msg => this.barcodeValue = msg)
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent1);
    modalRef.componentInstance.name = 'World';
  }

  toggle() {
    this.toggleThePage = !this.toggleThePage;
    this.toggleService.toggleThePannel.next(this.toggleThePage);
  }
  poNumber=/^8/;
  asnNumber=/^6/;
  onSearchClick() {
    debugger;
    
    console.log(this.barcodeValue);
    setTimeout(() => {
      if(this.barcodeValue == 'asn' || this.barcodeValue.match(this.asnNumber)) {
        this.route.navigate(['/purchaseDetails']);
      } else 
      if(this.barcodeValue == 'po' || this.barcodeValue.match(this.poNumber) ) {
        this.route.navigate(['/poDetails']);
      }
      this.barcodeValue = '';
    },1000);
  }
}
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Scan Your Barcode</h4>
       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
   </button>
    </div>
    <div class="modal-body">
    <barcode-scanner-livestream type="code_128" (valueChanges)="onValueChanges($event)"></barcode-scanner-livestream>
        <div [hidden]="!barcodeValue">
            {{barcodeValue}}
        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent1 implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal, public barcode: BarcodeValueService) {}
  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;
  ngOnInit() {
    this.startQuagga();
    this.barcode.currentmessage.subscribe(message => this.barcodeValue = message)
  }
  ngAfterViewInit() {
    this.barecodeScanner.stop();
  }
  startQuagga() {
    this.barecodeScanner.start()
  }
  stopQuagga() {
    this.barecodeScanner.stop()
  }
  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
    console.log(result.codeResult.code)
    this.barecodeScanner.stop()
    this.barcode.changeMessage(result.codeResult.code)
    this.activeModal.close('Close click')
  }
}
