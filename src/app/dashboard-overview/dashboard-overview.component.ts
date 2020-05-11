import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {

  config = {
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

  constructor() { }

  ngOnInit() {
  }

}
