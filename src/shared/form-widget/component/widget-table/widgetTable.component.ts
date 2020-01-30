import { Component, Input, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BarcodeValueService } from "../../../../app/barcode-value.service";
import { BarecodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
    selector: 'widget-table',
    templateUrl: './widgetTable.component.html',
    styleUrls: ['./widgetTable.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WidgetTable implements OnInit {
    @Input() data;
    barcodeValue

    ngOnInit(): void {
        this.barcodeService.currentmessage.subscribe(msg => this.barcodeValue = msg)
    }
    constructor(private modalService: NgbModal, public barcodeService: BarcodeValueService) { }

    openBarcodeScanner() {
        const modalRef = this.modalService.open(NgbdModalContent3);
        modalRef.componentInstance.name = 'World';
    }

    applyData(event, index) {
        this.values[index][1].value = event.target.value
        this.data.values[index] = this.values[index]
    }

    values = [
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
                value: 'E-MONT_KS-PANZERROHR_DN20',
                styles: { 'width': '240px' }
            },
            {
                type: 'textbox',
                value: '',
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
                value: '',
            },
            {
                type: 'textbox',
                value: 'KIT,ANALYSIS,HEATER TUBE & FILTER,MFR UN',
                styles: { 'width': '240px' }
            },
            {
                type: 'textbox',
                value: '',
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
                value: '3'
            },
            {
                type: 'textboxchange',
                value: '',
            },
            {
                type: 'textbox',
                value: 'MILLIPORE AAWP04700',
                styles: { 'width': '240px' }
            },
            {
                type: 'textbox',
                value: '',
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
                value: '4'
            },
            {
                type: 'textboxchange',
                value: '',
            },
            {
                type: 'textbox',
                value: 'Bracket Assembly',
                styles: { 'width': '240px' }
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'textbox',
                value: 'E2801160600002023A5B6641',
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
                value: ''
            },
            {
                type: 'textbox',
                value: '',
                styles: { 'width': '240px' }
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'textbox',
                value: '',
                styles: { 'width': '210px' }
            }
        ]
    ]

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
export class NgbdModalContent3 implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal, public barcode: BarcodeValueService) { }
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