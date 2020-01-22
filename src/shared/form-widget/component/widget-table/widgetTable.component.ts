import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'widget-table',
    templateUrl: './widgetTable.component.html',
    styleUrls: ['./widgetTable.component.scss']
})
export class WidgetTable implements OnInit {
    @Input() data;

    ngOnInit(): void {
        debugger;
        console.log(this.data);
                
    }

}