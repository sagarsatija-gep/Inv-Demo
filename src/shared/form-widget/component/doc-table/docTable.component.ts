import { DevTable } from './dev-table/dev-table.component';
import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewEncapsulation } from "@angular/core";

interface Document {
    id?: number;
    docName: string;
    createdDate: string;
    lastAccessed: string;
  }

const components = {
    'table': DevTable
}

@Component({
    selector: 'doc-table',
    templateUrl: './docTable.component.html',
    styleUrls: ['./docTable.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DocumentTable implements OnInit {

    @Input() data: any = {};
    @ViewChild('tabContainer', {read: ViewContainerRef}) tabContainer: ViewContainerRef;
    tabData = [];
    component;
    constructor(private cfr: ComponentFactoryResolver) {}

    ngOnInit(): void {
        console.log(this.data);
        // this.tabData = [ 'Line', 'Accounting'];
        this.data.data.map(data => {
            this.tabData.push(data.tabName);
        })
        this.loadTableComponent(this.data.data[0].tabData);
        
    }

    loadTableComponent(data) {
        this.tabContainer.clear();
        const componentName = components.table;
        const componentFactory = this.cfr.resolveComponentFactory(componentName);
        this.component = this.tabContainer.createComponent(componentFactory);
        this.component.instance.data = data;
    }

    tabSelection(e) {
        debugger
        console.log(e);
        this.loadTableComponent(this.data.data[e].tabData);
    }

}