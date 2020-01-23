import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

    quickLinks : Object[];

  constructor() {
    this.quickLinks = [
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink1.png",
        txt: "Manage Cycle Count Requests"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink2.png",
        txt: "Manage Cycle Count Requests"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink3.png",
        txt: "Internal Stock Transfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink4.png",
        txt: "Manage Cycle Count Requests"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink5.png",
        txt: "Manage Reservations"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink6.png",
        txt: "Create Stock Transfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink7.png",
        txt: "Manage Goods Issue"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink8.png",
        txt: "Manage Cycle Count Requests"
      }
    ];
   }

  ngOnInit() {
  }

}
