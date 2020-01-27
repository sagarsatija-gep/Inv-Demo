import { WidgetTable } from './widget-table/widgetTable.component';
import { WidgetAttachemant } from './widgetAttachement/widgetAttachement.component';
import { DocumentTable } from './doc-table/docTable.component';
import { RecDocComponent } from './../../../app/rec-doc/rec-doc.component';
import { DetailsComponent } from './details-component/details.component';
import { TryComponet } from './tryComponent/tryComponent';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { GoodsIssueDetails } from './goods-issue-details/goodsIssueDetails.component';
import { ManageGoodsIssue } from './manage-goods-issue/manageGoodsIssue.component';


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
    constructor(private cfr: ComponentFactoryResolver){}
    
    ngOnInit(): void {
        this.togal = this.headerData.isOpen;
        this.createComponent();
    }

    createComponent() {
        if(this.togal) {
            debugger;
            const componentName = components[this.headerData.data.componentName];
            const componentFactory = this.cfr.resolveComponentFactory(componentName);
            this.component = this.trycomponent.createComponent(componentFactory);
            if( this.headerData.data != null) {
                this.component.instance.data = this.headerData.data;
            }
        }
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