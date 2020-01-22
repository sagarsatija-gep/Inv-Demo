import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'widget-table',
    templateUrl: './widgetTable.component.html',
    styleUrls: ['./widgetTable.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WidgetTable implements OnInit {
    @Input() data;

    ngOnInit(): void {
        debugger;
        console.log(this.data);
    }

}