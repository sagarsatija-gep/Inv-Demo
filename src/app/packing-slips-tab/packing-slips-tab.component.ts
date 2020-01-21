import { Component, ViewEncapsulation } from '@angular/core';

interface PackingSlip {
  id?: number;
  fileName: string;
  poNumber: string;
  uploadDate: string;
  status: string;
  receiptNumber: string;
}

const PACKINGSLIPS: PackingSlip[] = [
  {
    fileName: "PL-2019.11.7894563.jpg",
    poNumber: "0060105362",
    uploadDate: "11/06/2019",
    status: "UNPROCESSED",
    receiptNumber: ""
  },
  {
    fileName: "PL-2019.11.7894562.jpg",
    poNumber: "0060105411",
    uploadDate: "10/31/2019",
    status: "UNPROCESSED",
    receiptNumber: ""
  },
  {
    fileName: "PL-2019.11.7891112.jpg",
    poNumber: "0060105434",
    uploadDate: "10/30/2019",
    status: "IN PROGRESS",
    receiptNumber: ""
  },
  {
    fileName: "PL-2019.11.7893412.jpg",
    poNumber: "0060105541",
    uploadDate: "10/29/2019",
    status: "IN PROGRESS",
    receiptNumber: ""
  },
  {
    fileName: "PL-2019.11.7891512.jpg",
    poNumber: "0060105419",
    uploadDate: "10/30/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000159"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  },
  {
    fileName: "PL-2019.11.7891612.jpg",
    poNumber: "0060105413",
    uploadDate: "10/28/2019",
    status: "RECEIPT CREATED",
    receiptNumber: "RE0000154"
  }
]

@Component({
  selector: 'app-packing-slips-tab',
  templateUrl: './packing-slips-tab.component.html',
  styleUrls: ['./packing-slips-tab.component.css']
})
export class PackingSlipsTabComponent {
  page = 1;
  pageSize = 7;
  collectionSize = PACKINGSLIPS.length;

  get packingSlips(): PackingSlip[] {
    return PACKINGSLIPS
      .map((packingSlip, i) => ({ id: i + 1, ...packingSlip }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor() { }
}