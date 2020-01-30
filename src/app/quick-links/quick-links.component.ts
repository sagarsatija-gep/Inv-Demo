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
        url: "/internalstocktransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/inv-demo-blob/dist/assets/images/quicklink4.png",
        txt: "Create Package",
        url: "/createPackage"
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

    this.barcodeBlock = [
      {
        itemnumber: 5444032,
        noofLines: 25,
        barcodeImage: '../../assets/images/barcode1.png',
        barcodeName: 'Bracket Assembly'
      },
      {
        itemnumber: 7454512,
        noofLines: 22,
        barcodeImage: '../../assets/images/barcode2.png',
        barcodeName: 'E-MONT_KS-PANZERROHR_DN20'
      },
      {
        itemnumber: 8732674,
        noofLines: 28,
        barcodeImage: '../../assets/images/barcode3.png',
        barcodeName: 'KIT,ANALYSIS,HEATER TUBE & FILTER,MFR UN'
      },
      {
        itemnumber: 1592349,
        noofLines: 23,
        barcodeImage: '../../assets/images/barcode4.png',
        barcodeName: 'MILLIPORE AAWP04700'
      }
    ]
  }


  ngOnInit() {
  }

}
