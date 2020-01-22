import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unprocessed-packing-slips',
  templateUrl: './unprocessed-packing-slips.component.html',
  styleUrls: ['./unprocessed-packing-slips.component.css']
})
export class UnprocessedPackingSlipsComponent implements OnInit {
  unprocessedSlips: Object[];

  constructor() {
    this.unprocessedSlips = [
      {
        fileName: "PL-2019.11.7894563.jpg",
        poNumber: "0060105362",
        uploadDate: "11/06/2019"
      },
      {
        fileName: "PL-2019.11.7894562.jpg",
        poNumber: "0060105411",
        uploadDate: "10/31/2019"
      }
    ];
  }

  ngOnInit() {
  }

}
