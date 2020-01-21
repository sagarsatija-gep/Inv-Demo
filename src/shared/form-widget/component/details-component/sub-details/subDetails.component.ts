import { DetailsComponent } from './../details.component';
import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef, OnInit } from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'subDetails',
    templateUrl: './subDetails.component.html',
    styleUrls: ['./subDetails.component.scss']
})
export class SubDetailsComponent implements OnInit {
    @Input() subDetail: any = {};
    @ViewChild('subComponent', {read: ViewContainerRef}) subComponent: ViewContainerRef;
    isTogal: boolean;
    component;

    constructor(private cfr: ComponentFactoryResolver){}

    ngOnInit(): void {
        debugger;
        console.log(this.subDetail);
        this.isTogal = false;
        // this.createComponent();        
    }

    headerClick() {
        debugger
        if(this.isTogal) {
            this.isTogal = !this.isTogal;
            this.subComponent.clear();
        } else {
            this.isTogal = !this.isTogal;
            this.createComponent();
        }
    }
    
    createComponent(){
        const componentFactory = this.cfr.resolveComponentFactory(DetailsComponent);
        this.component = this.subComponent.createComponent(componentFactory);
        this.component.instance.data = this.subDetail;
    }
}