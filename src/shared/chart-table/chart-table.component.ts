import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'chart-table',
    templateUrl: './chart-table.component.html',
    styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent implements OnInit {
    config;
    toggleButton ;

    @ViewChild('btn1') btn1: ElementRef;
    @ViewChild('btn2') btn2: ElementRef;

    ngOnInit() {
        console.log("hu");        
        this.config = {
            "heading": 'Material',
            "minMaxButton": true,
            "toggleButton": true,
            "toggleButtonConfig": {
                "btn1": {
                    "name": 'Short Fall',
                    "active": true
                },
                "btn2": {
                    "name": 'Excess',
                    "active": false
                }
            },
            "colValue": [
                {
                    type: 'clickable',
                    name: 'Item#',
                    width: '10%'
                },
                {
                    type: 'text',
                    name: 'Description'
                },
                {
                    type: 'text',
                    name: 'Shortfall At'
                },
                {
                    type: 'text',
                    name: 'Current Stock',
                    width: '22%'
                }
            ],
            "rowValue": [
                [ "119302", "b", "c", "d"],
                [ "119302", "b", "c", "d"],
                [ "119302", "b", "c", "d"],
                [ "119302", "b", "c", "d"],
                [ "119302", "a", "c", "d"]
            ]
        };

        if(this.config.toggleButton) {
            this.toggleButton = this.config.toggleButtonConfig;
        }
    }

    toggleClick(name) {
        debugger
        if(name == 'btn1') {
            this.toggleButton.btn1.active = true;
            this.toggleButton.btn2.active = false;
            this.btn1.nativeElement.classList.add('active');
            this.btn2.nativeElement.classList.remove('active');
        } 
        if(name == 'btn2') {
            this.toggleButton.btn1.active = false;
            this.toggleButton.btn2.active = true;
            this.btn1.nativeElement.classList.remove('active');
            this.btn2.nativeElement.classList.add('active');            
        }
    }
}