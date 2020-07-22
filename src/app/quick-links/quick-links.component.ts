import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  quickLinks: Object[];
  barcodeBlock: Object[];

  constructor() {
    this.quickLinks = [
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manage2yearPlan.png",
        txt: "Manage Cycle Count",
        url: "/manageCycleCountRequests"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/replenishment.png",
        txt: "External Stock Transfer",
        url: "/externalStockTransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageOrder.png",
        txt: "Internal Stock Transfer",
        url: "/internalstocktransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageTank.png",
        txt: "Create Package",
        url: "/createPackage"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageShipment.png",
        txt: "Manage Reservations"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageCapacity.png",
        txt: "Manage Goods Issue"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageactiveIngradient.png",
        txt: "Manage Stock Movement"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageleadTime.png",
        txt: "Manage Pick List"
      }
    ];

    this.barcodeBlock = [
      {
        itemnumber: 5444032,
        noofLines: 25,
        barcodeImage: 'https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/barcode1.png',
        barcodeName: 'Bracket Assembly'
      },
      {
        itemnumber: 7454512,
        noofLines: 22,
        barcodeImage: 'https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/barcode2.png',
        barcodeName: 'E-MONT_KS-PANZERROHR_DN20'
      },
      {
        itemnumber: 8732674,
        noofLines: 28,
        barcodeImage: 'https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/barcode3.png',
        barcodeName: 'KIT,ANALYSIS,HEATER TUBE & FILTER,MFR UN'
      },
      {
        itemnumber: 1592349,
        noofLines: 23,
        barcodeImage: 'https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/barcode4.png',
        barcodeName: 'MILLIPORE AAWP04700'
      }
    ]
  }


  ngOnInit() {
  }

}
