import { Component } from '@angular/core';

interface CycleCountRequest {
  id?: number;
  itemDetails: string;
  cycleCountNumber: string;
  scheduledDate: string;
  type: string;
  status: string;
}

const CYCLECOUNTREQUESTS: CycleCountRequest[] = [
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "11/02/2020",
    type: "Unplanned",
    status: "SCHEDULED"
  },
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "11/02/2020",
    type: "Unplanned",
    status: "COMPLETED"
  },
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "11/02/2020",
    type: "Unplanned",
    status: "IN PROGRESS"
  },
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "11/02/2020",
    type: "Unplanned",
    status: "SCHEDULED"
  },
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "11/02/2020",
    type: "Unplanned",
    status: "SCHEDULED"
  },
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "11/02/2020",
    type: "Unplanned",
    status: "SCHEDULED"
  }
]

@Component({
  selector: 'app-cycle-count-list-view',
  templateUrl: './cycle-count-list-view.component.html',
  styleUrls: ['./cycle-count-list-view.component.css']
})
export class CycleCountListViewComponent {

  get cycleCountRequests(): CycleCountRequest[] {
    return CYCLECOUNTREQUESTS
      .map((cycleCountRequest, i) => ({ id: i + 1, ...cycleCountRequest }));
  }

  constructor() { }
}