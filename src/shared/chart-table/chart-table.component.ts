import { Component, OnInit, ElementRef, ViewChild, Input } from "@angular/core";

@Component({
    selector: 'chart-table',
    templateUrl: './chart-table.component.html',
    styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent implements OnInit {
    @Input() config;
    toggleButton ;

    @ViewChild('btn1') btn1: ElementRef;
    @ViewChild('btn2') btn2: ElementRef;

    ngOnInit() {
        console.log("hu");        

        if(this.config.toggleButton) {
            this.toggleButton = this.config.toggleButtonConfig;
        }
    }

    toggleClick(name) {
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