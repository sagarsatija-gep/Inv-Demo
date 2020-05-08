import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'chart-table',
    templateUrl: './chart-table.component.html',
    styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent implements OnInit {
    config;
    ngOnInit() {
        console.log("hu");        
        this.config = {
            "heading": 'Material',
            "colValue": [
                {
                    name: 'Item'
                },
                {
                    name: 'Description'
                },
                {
                    name: 'Shortfall At'
                },
                {
                    name: 'Current Stock'
                }
            ],
            "rowValue": [
                [ "a", "b", "c", "d"],
                [ "a", "b", "c", "d"],
                [ "a", "b", "c", "d"],
                [ "a", "b", "c", "d"],
                [ "a", "a", "c", "d"]
            ]
        };
    }
}