import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {

  configs = [
    {
      "heading": 'Material',
      "minMaxButton": true,
      "toggleButton": true,
      "isTable": true,
      "chartType": 'chart1',
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
        ["119302", "b", "c", "d"],
        ["119302", "b", "c", "d"],
        ["119302", "b", "c", "d"],
        ["119302", "b", "c", "d"],
        ["119302", "a", "c", "d"]
      ]
    },
    {
      "heading": 'Material',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'chart1',
      "chartScheme": { domain: ['#000'] },
      "legendTitle": 'Rahul',
      "barPadding": '80',
      "isGradient": true,
      "isLegend": false,
      "xAxisShow": true,
      "yAxisShow": true,
      "xLabel": 'Yahu',
      "yLabel": 'Aantal Leden',
      "showXLabel": true,
      "showYLabel": true,
    },
    {
      "heading": 'Material',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'chart2',
    },
    {
      "heading": 'Material',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'chart2',
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
