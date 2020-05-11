import { Component, OnInit, ElementRef, ViewChild, Input } from "@angular/core";

@Component({
    selector: 'chart-table',
    templateUrl: './chart-table.component.html',
    styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent implements OnInit {
    @Input() config;
    toggleButton;

    @ViewChild('btn1') btn1: ElementRef;
    @ViewChild('btn2') btn2: ElementRef;

    istable;
    chartType;
    chartData = [
        {
            'name': '2014',
            'value': 5
        },
        {
            'name': '2015',
            'value': 10
        },
        {
            'name': '2016',
            'value': 8
        },
        {
            'name': '2017',
            'value': 15
        },
        {
            'name': '2018',
            'value': 8
        },
        {
            'name': '2019',
            'value': 15
        }
    ];
    view = [300, 650];
    chartScheme = { domain: ['#000'] };
    legendTitle = 'Rahul';
    barPadding = '80';
    isGradient = true;
    isLegend = false;
    xAxisShow = true;
    yAxisShow = true;
    xLabel = 'Yahu';
    yLabel = 'Aantal Leden';
    showXLabel = true;
    showYLabel = true;

    ngOnInit() {
        console.log("hu");

        if (this.config.toggleButton) {
            this.toggleButton = this.config.toggleButtonConfig;
        }
        this.istable = this.config.isTable;
        if (!this.config.isTable) {
            this.view = this.config.view;
            this.chartType = this.config.chartType;
            this.chartScheme = { domain: ['#000'] };
            this.legendTitle = this.config.legendTitle;
            this.barPadding = this.config.barPadding;
            this.isGradient = this.config.isGradient;
            this.isLegend = this.config.isLegend;
            this.xAxisShow = this.config.xAxisShow;
            this.yAxisShow = this.config.yAxisShow;
            this.xLabel = this.config.xLabel;
            this.yLabel = this.config.yLabel;
            this.showXLabel = this.config.showXLabel;
            this.showYLabel = this.config.showYLabel;
            this.chartData = this.config.data;
        }
    }

    toggleClick(name) {
        if (name == 'btn1') {
            this.toggleButton.btn1.active = true;
            this.toggleButton.btn2.active = false;
            this.btn1.nativeElement.classList.add('active');
            this.btn2.nativeElement.classList.remove('active');
        }
        if (name == 'btn2') {
            this.toggleButton.btn1.active = false;
            this.toggleButton.btn2.active = true;
            this.btn1.nativeElement.classList.remove('active');
            this.btn2.nativeElement.classList.add('active');
        }
    }
}