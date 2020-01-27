import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'widget-attachement',
    templateUrl: './widgetAttachement.component.html',
    styleUrls: ['./widgetAttachement.component.scss']
})
export class WidgetAttachemant implements OnInit {
    @Input() data;
    ngOnInit() {
        debugger;
        console.log(this.data);
    }
}