import { TryComponet } from './tryComponent/tryComponent';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";

@Component({
    selector:'widget-header',
    styleUrls:[],
    templateUrl:'./widgetHeader.component.html'
})
export class WidgetHeaderComponent implements OnInit {
    @Input() headerData: any ={};
    @ViewChild( 'trycomponent', { read: ViewContainerRef}) trycomponent: ViewContainerRef;

    togal = true;
    component;
    constructor(private cfr: ComponentFactoryResolver){}
    
    ngOnInit(): void {
        this.createComponent();
    }

    createComponent() {
        const componentFactory = this.cfr.resolveComponentFactory(TryComponet);
        this.component = this.trycomponent.createComponent(componentFactory);
        this.component.instance.data = this.headerData.data;
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