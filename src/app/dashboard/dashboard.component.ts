import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { inventoryData } from '../../../data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public data: Object[];
  public groupOptions: Object;
  public pageSettings: Object;
  constructor() { }

  filter = {
    filterName: 'More Action',
    type: 'single-select',
    search: false,
    disabled: true,
    styles: {
      "flex": "0 0 10.5%",
      "max-width": "10.5%",
      "padding": "0 3px",
      "position": "absolute",
      "right": "15px",
      "top": "15px",
      "z-index": "10"
    },
    options: [
      {
        name: 'Action'
      }
    ]
  }

  ngOnInit(): void {
    this.data = inventoryData;
    this.groupOptions = { showGroupedColumn: false, columns: ['Reservation'] };
    this.pageSettings = { pageCount: 5 };
  }
}
