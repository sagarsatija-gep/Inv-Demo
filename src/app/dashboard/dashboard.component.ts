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

  ngOnInit(): void {
    this.data = inventoryData;
    this.groupOptions = { showGroupedColumn: false, columns: ['Reservation'] };
    this.pageSettings = { pageCount: 5 };
}
}
