import { SubDetailsComponent } from './sub-details/subDetails.component';
import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";

@Component({
    selector: 'detailsp',
    templateUrl: './details.component.html',
    styleUrls: []
})
export class DetailsComponent implements OnInit {
    @Input() data: any;

    @ViewChild('subDetails', {read: ViewContainerRef}) subDetails: ViewContainerRef;

    component;

    constructor(private cfr: ComponentFactoryResolver){}

    ngOnInit(): void {
        debugger;
        console.log(this.data);

        if(this.data.isSubDetails) {
            this.data.subDetailsData.map(data => {
                this.CreateSuDetailsData(data);
            })
        }
        
    }

    CreateSuDetailsData(subDetail) {
        const componentFactory = this.cfr.resolveComponentFactory(SubDetailsComponent);
        this.component = this.subDetails.createComponent(componentFactory);
        this.component.instance.subDetail = subDetail;
    }
}