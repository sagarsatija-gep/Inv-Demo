import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface CycleCountRequest {
  id?: number;
  itemDetails: string;
  cycleCountNumber: string;
  scheduledDate: string;
  reviewer: string;
  assigned: string;
  type: string;
  status: string;
  url?: string;
}

const CYCLECOUNTREQUESTS: CycleCountRequest[] = [
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "09/11/2020",
    type: "Planned",
    status: "SCHEDULED",
    url: 'ManageCycleCountDetails',
    assigned: 'John',
    reviewer: 'Andy'
  },
  {
    itemDetails: "System Generated - Count for Bin- D-02-A",
    cycleCountNumber: "CC-002730",
    scheduledDate: "09/13/2020",
    type: "Unplanned",
    status: "SCHEDULED",
    url: 'manageCycleCountDetails2',
    assigned: 'Adward',
    reviewer: 'John'

  },
  {
    itemDetails: "System Generated - Class C Items Count",
    cycleCountNumber: "CC-002731",
    scheduledDate: "09/12/2020",
    type: "Planned",
    status: "SCHEDULED",
    url: 'cycleCountDetails',
    assigned: 'Adward',
    reviewer: 'Andy'
  },
  {
    itemDetails: "Count 4AM-FRV-13C Air Motor",
    cycleCountNumber: "CC-003692",
    scheduledDate: "09/10/2020",
    type: "Unplanned",
    status: "IN PROGRESS",
    assigned: 'Mk Chi',
    reviewer: 'Andy'
  },
  {
    itemDetails: "Pneumatic Quick Exhaust Valve R10672398",
    cycleCountNumber: "CC-002534",
    scheduledDate: "09/10/2020",
    type: "Unplanned",
    status: "COMPLETED",
    assigned: 'John',
    reviewer: 'Elisa'
  },
  {
    itemDetails: "System Generated – Pneumatic Category Items",
    cycleCountNumber: "CC-002612",
    scheduledDate: "09/13/2020",
    type: "Planned",
    status: "SCHEDULED",
    assigned: 'Mk',
    reviewer: 'Andy'
  }
];
const RECYCLECOUNTREQUESTS: CycleCountRequest[] = [
  {
    itemDetails: "Count Tuthill Pump FR700V",
    cycleCountNumber: "CC-002978",
    scheduledDate: "09/11/2020",
    type: "Planned",
    status: "SCHEDULED",
    url: 'ManageCycleCountDetails',
    assigned: 'John',
    reviewer: 'Andy'
  },
  {
    itemDetails: "System Generated - Count for Bin- D-02-A",
    cycleCountNumber: "CC-002730",
    scheduledDate: "09/13/2020",
    type: "Unplanned",
    status: "SCHEDULED",
    url: 'manageCycleCountDetails2',
    assigned: 'Adward',
    reviewer: 'John'

  },
  {
    itemDetails: "System Generated - Class C Items Count",
    cycleCountNumber: "CC-002731",
    scheduledDate: "09/12/2020",
    type: "Planned",
    status: "SENT FOR REVIEW",
    url: 'cycleCountDetails',
    assigned: 'Adward',
    reviewer: 'Andy'
  },
  {
    itemDetails: "Count 4AM-FRV-13C Air Motor",
    cycleCountNumber: "CC-003692",
    scheduledDate: "09/10/2020",
    type: "Unplanned",
    status: "IN PROGRESS",
    assigned: 'Mk Chi',
    reviewer: 'Andy'
  },
  {
    itemDetails: "Pneumatic Quick Exhaust Valve R10672398",
    cycleCountNumber: "CC-002534",
    scheduledDate: "09/10/2020",
    type: "Unplanned",
    status: "COMPLETED",
    assigned: 'John',
    reviewer: 'Elisa'
  },
  {
    itemDetails: "System Generated – Pneumatic Category Items",
    cycleCountNumber: "CC-002612",
    scheduledDate: "09/13/2020",
    type: "Planned",
    status: "SCHEDULED",
    assigned: 'Mk',
    reviewer: 'Andy'
  }
];

@Component({
  selector: 'app-cycle-count-list-view',
  templateUrl: './cycle-count-list-view.component.html',
  styleUrls: ['./cycle-count-list-view.component.css']
})
export class CycleCountListViewComponent implements OnInit {

  get cycleCountRequests(): CycleCountRequest[] {
    if(this.url === 'CycleCountRequests') {
      
      return RECYCLECOUNTREQUESTS
      .map((cycleCountRequest, i) => ({ id: i + 1, ...cycleCountRequest }));

    } else {
      
      return CYCLECOUNTREQUESTS
        .map((cycleCountRequest, i) => ({ id: i + 1, ...cycleCountRequest }));
    }
  }

  constructor(private route: Router) { }
  url;
  ngOnInit() {

    this.url = this.route.url;
    this.url = this.url.split('/')[1];

    if(this.url === 'CycleCountRequests') {

    }

  }
}