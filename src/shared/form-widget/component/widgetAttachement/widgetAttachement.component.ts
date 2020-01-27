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
  constructor(private cfr: ComponentFactoryResolver, private modalService: NgbModal ) {}
  ngOnInit() {
    console.log(this.data);
    if( this.data.numberOfInput != "three" && this.data.numberOfInput != "one") {
        this.upload();
    } 
  }
  ngOnDestroy() {
    // this.data.numberOfInput= "three";  
  }

  upload() {
    console.log("uploaded")
    this.data.numberOfInput= "f";
    const componentFactory = this.cfr.resolveComponentFactory(WidgetTable);
    this.component = this.loadComponent.createComponent(componentFactory);
    this.component.instance.data = {

      tablerowClass: 'bg-white',
      colConfig: [{
          type: 'checkbox',
          name: 'Reservation #',
          classes: 'text-left',
          // styles: {'width': '%'},
        },
        {
          type: 'text',
          name: 'Name',
          // colSize: '100px',
          classes: 'text-left',
          // styles: {'width': '8%'},
        },
        {
          type: 'text',
          name: 'Type',
          // colSize: '100px',
          classes: ' ',
          // styles: {'width': '8%'},
        },
        {
          type: 'text',
          name: 'Classification',
          colSize: '100px',
          // styles: {'background-color': 'rebeccapurple'},
          classes: 'text-left',
          // styles: {'width': '8%'},
        },
        {
          type: 'text',
          name: 'Added By',
          // colSize: '100px',
          // styles: {'background-color': 'rebeccapurple'},
          // classes: 'text-left',

        },
        {
          type: 'text',
          name: 'File Size',
          colSize: '100px',
          // styles: {'width': '8%'},
        },
      ],
      values: [
        [{
            type: 'checkbox',
            value: 'false',
            tdClasses: 'text-left'
          },
          {
            type: 'hiperlink',
            value: 'Bill Of Lading.pdf',
            tdClasses: 'text-left'
          },
          {
            type: 'text',
            value: 'File',
          },
          {
            type: 'text',
            value: 'Shipping Documents',
            tdClasses: 'text-left'
          },
          {
            type: 'text',
            value: 'Kim Powell',
          },
          {
            type: 'text',
            value: '20kb',
          },
          // {
          //   type: 'text',
          //   value: '77',
          //   tdClasses: 'text-right'
          // },
          // {
          //   type: 'text',
          //   value: '20',
          //   tdClasses: 'text-right'
          // },
          // {
          //   type: 'text',
          //   value: '25',
          //   tdClasses: 'text-right'
          //   // classes: 'input-small rounded-sm border-secondary text-right'
          // },
          // {
          //   type: 'text',
          //   value: '08/21/2019',
          //   tdClasses: 'text-left'
          // },
          // {
          //   type: 'toggle',
          //   value: true,
          // },
          // {
          //   type: 'text',
          //   value: '10/28/2019',
          // }
        ]
      ]
    }

  }
}
