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
      "chartType": 'bar-vertical',
      "view": [650, 300],
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
      "data": [
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
    ]
    },
    {
      "heading": 'Material',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'bar-horizontal',
      "view": [650, 300],
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
      "data": [
        {
          "name": "Germany",
          "value": 8940000
        },
        {
          "name": "USA",
          "value": 5000000
        },
        {
          "name": "France",
          "value": 7200000
        }
      ]
    },
    {
      "heading": 'Material',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'grouped-vertical-bar',
      "view": [650, 300],
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
      "data":  [
        {
          "name": "Germany",
          "series": [
            {
              "name": "2010",
              "value": 7300000
            },
            {
              "name": "2011",
              "value": 8940000
            }
          ]
        },
      
        {
          "name": "USA",
          "series": [
            {
              "name": "2010",
              "value": 7870000
            },
            {
              "name": "2011",
              "value": 8270000
            }
          ]
        },
      
        {
          "name": "France",
          "series": [
            {
              "name": "2010",
              "value": 5000002
            },
            {
              "name": "2011",
              "value": 5800000
            }
          ]
        }
      ]
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
