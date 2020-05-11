import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {

  configs = [
    {
      "heading": 'Inventory Ownership',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'bar-horizontal',
      "view": [650, 300],
      "chartScheme": { domain: ['#000'] },
      "legendTitle": 'Rahul',
      "barPadding": '30',
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
      "heading": 'Inventory Aging',
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
      "heading": 'Cycle Count - Planned Vs Actuals',
      "minMaxButton": true,
      "toggleButton": false,
      "isTable": false,
      "chartType": 'grouped-vertical-bar',
      "view": [650, 300],
      "chartScheme": { domain: ['#000'] },
      "legendTitle": 'Rahul',
      "barPadding": '20',
      "isGradient": true,
      "isLegend": true,
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
    {
      "heading": 'Cycle Count - Aging',
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
  ];


  constructor() { }

  ngOnInit() {
  }

}
