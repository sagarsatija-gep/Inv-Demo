import { Component, Input } from "@angular/core";

@Component({
    selector: 'modify-Widget-table',
    templateUrl: './modifyWidgetTable.html',
    styleUrls: ['./modifyWidgetTable.scss']
})

export class  ModifyWidgetTable {
    @Input() data;
    constructor() { }
}