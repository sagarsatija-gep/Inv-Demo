import { WidgetHeaderComponent } from './../component/widgetHeader.component';
import { Component, OnInit, Input, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";

@Component({
    selector: 'Form-widget',
    styleUrls: ['./widgetForm.component.css'],
    templateUrl: './widgetForm.component.html' 
})
export class WidgetFormComponent implements OnInit {
    @Input() config: any[] =[];
    @ViewChild('widgetContainer', {read: ViewContainerRef}) widgetContainer: ViewContainerRef;
    component;
    constructor( private cfr: ComponentFactoryResolver){
    }

    ngOnInit(): void {

        this.config.map(data => {
            const componentFactory = this.cfr.resolveComponentFactory(WidgetHeaderComponent);
            this.component = this.widgetContainer.createComponent(componentFactory);
            this.component.instance.headerData = data.HeaderData;
        })

    }
}