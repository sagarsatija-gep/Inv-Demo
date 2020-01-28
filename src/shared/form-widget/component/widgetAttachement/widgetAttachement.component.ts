import { PopUpService } from './../../service/popUp.service';
import {
  WidgetTable
} from './../widget-table/widgetTable.component';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'widget-attachement',
  templateUrl: './widgetAttachement.component.html',
  styleUrls: ['./widgetAttachement.component.scss']
})
export class WidgetAttachemant implements OnInit, OnDestroy {
  @Input() data;

  @ViewChild('table', {
    read: ViewContainerRef
  }) loadComponent: ViewContainerRef;

  component;
  constructor(private cfr: ComponentFactoryResolver, private popUp: PopUpService ) {}
  ngOnInit() {
    this.popUp.attachmentTable.subscribe(isShow=>{
      if(isShow) {
        this.upload();
      }
    })
    console.log(this.data);
    if (this.data.numberOfInput != "three" && this.data.numberOfInput != "one") {
      this.upload();
    }
  }
  ngOnDestroy() {
    // this.data.numberOfInput= "three";  
  }

  popUpOpen(){
    this.popUp.internalStockPopupOpen();
  }

  upload() {
    debugger;
    console.log("uploaded")
    this.data.numberOfInput = "f";
    const componentFactory = this.cfr.resolveComponentFactory(WidgetTable);
    this.component = this.loadComponent.createComponent(componentFactory);
    if(this.data.page == 'internalStockTaransfer' ) {
      this.component.instance.data = this.popUp.internalTableData;
    } else {
      this.component.instance.data = this.popUp.asnTableData;
    }

  }
}
