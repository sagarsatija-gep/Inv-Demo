import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'detailsp',
    templateUrl: './details.component.html',
    styleUrls: []
})
export class DetailsComponent implements OnInit {
    @Input() data: any[] = [];

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        debugger;
        console.log(this.data);
        
    }
}