import { WidgetTable } from './widget-table/widgetTable.component';
import { WidgetAttachemant } from './widgetAttachement/widgetAttachement.component';
import { DocumentTable } from './doc-table/docTable.component';
import { RecDocComponent } from './../../../app/rec-doc/rec-doc.component';
import { DetailsComponent } from './details-component/details.component';
import { TryComponet } from './tryComponent/tryComponent';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { GoodsIssueDetails } from './goods-issue-details/goodsIssueDetails.component';
import { ManageGoodsIssue } from './manage-goods-issue/manageGoodsIssue.component';
import { PopUpService } from '../service/popUp.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { barcodePopup } from "../../popUpComponent/barcodePopup/barcodePopup.component";


const  components = {
    'details': DetailsComponent,
    'tabComponent': DocumentTable,
    'Attachement': WidgetAttachemant,
    'goodsIssueDetails': GoodsIssueDetails,
    'widgetTable': WidgetTable,
    'manageGoodsIssue': ManageGoodsIssue
};

@Component({
    selector:'widget-header',
    styleUrls:['./widgetHeader.component.scss'],
    templateUrl:'./widgetHeader.component.html'
})
export class WidgetHeaderComponent implements OnInit {
    @Input() headerData: any ={};
    @ViewChild( 'trycomponent', { read: ViewContainerRef}) trycomponent: ViewContainerRef;

    togal:boolean;
    component;
    showBarCode;
    constructor(private cfr: ComponentFactoryResolver, private poupservice: PopUpService , private route: Router, public modalService: NgbModal){}

    ngOnInit(): void {
        this.togal = this.headerData.isOpen;
        this.createComponent();
        //Using for barCode Reader in Asset
        this.poupservice.showBarCodeIcon.subscribe(data => {
            this.showBarCode = data;
        })

        //Using for read value from barCodePopUp

        // this.poupservice.barCodePopUpDataForAsset.subscribe(data=> {
        //     debugger
        //     console.log(data);
            
        // })


    }

    openPopup() {
        this.poupservice.isInternalStockErrorPopUp = false;
        this.poupservice.internalStockPopupOpen();
    }

    createComponent() {
        if(this.togal) {
            // debugger;
            const componentName = components[this.headerData.data.componentName];
            const componentFactory = this.cfr.resolveComponentFactory(componentName);
            this.component = this.trycomponent.createComponent(componentFactory);
            // debugger;
            if( this.headerData.data != null && this.headerData.data.componentName != 'widgetTable') {
                this.component.instance.data = this.headerData.data;
            } 
            if(this.headerData.data.componentName == 'widgetTable') {
                this.component.instance.data = this.headerData.data.data;
            }
        }
    }
    barcodePopUp() {
        const modalRef = this.modalService.open(barcodePopup, { size: 'lg' });
        modalRef.componentInstance.name = 'World';
        
      }


    headerClick() {
        if(this.togal) {
            this.togal = !this.togal;
            this.trycomponent.clear();
        } else {
            this.togal = !this.togal;
            this.createComponent();
        }
    }
    
}