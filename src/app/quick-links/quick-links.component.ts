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
        txt: "Manage Cycle Count",
        url: "/managecyclecount"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink2.png",
        txt: "External Stock Transfer",
        url: "/externalStockTransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink3.png",
        txt: "Internal Stock Transfer",
        url:"/internalstocktransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink4.png",
        txt: "Create Package"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink5.png",
        txt: "Manage Reservations"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink7.png",
        txt: "Manage Goods Issue"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink6.png",
        txt: "Manage Stock Movement"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink8.png",
        txt: "Manage Pick List"
      }
    ];
   }

  ngOnInit() {
  }

}
