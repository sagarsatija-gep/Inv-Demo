import { Component, Input } from '@angular/core';

@Component({
    selector: 'widget-attachement',
    templateUrl: './widgetAttachement.component.html',
    styleUrls: ['./widgetAttachement.component.scss']
})
export class WidgetAttachemant {
    @Input() data;
}