import { Component } from '@angular/core';

interface CycleCountRequest {
  id?: number;
  itemDetails: string;
  cycleCountNumber: string;
  scheduledDate: string;
  type: string;
  status: string;
  url?: string;
}

const CYCLECOUNTREQUESTS: CycleCountRequest[] = [
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "02/11/2020",
    type: "Planned",
    status: "SCHEDULED",
    url:'ManageCycleCountDetails'
  },
  {
    itemDetails: "System Generated - Count for Bin- D-02-A",
    cycleCountNumber: "CC-002730",
    scheduledDate: "02/13/2020",
    type: "Unplanned",
    status: "SCHEDULED",
    url:'manageCycleCountDetails2'

  },
  {
    itemDetails: "System Generated - Class C Items Count",
    cycleCountNumber: "CC-002731",
    scheduledDate: "02/12/2020",
    type: "Planned",
    status: "SCHEDULED"
  },
  {
    itemDetails: "Count 4AM-FRV-13C Air Motor",
    cycleCountNumber: "CC-003692",
    scheduledDate: "02/10/2020",
    type: "Unplanned",
    status: "IN PROGRESS"
  },
  {
    itemDetails: "Pneumatic Quick Exhaust Valve R10672398",
    cycleCountNumber: "CC-002534",
    scheduledDate: "02/10/2020",
    type: "Unplanned",
    status: "COMPLETED"
  },
  {
    itemDetails: "System Generated – Pneumatic Category Items",
    cycleCountNumber: "CC-002612",
    scheduledDate: "02/13/2020",
    type: "Planned",
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