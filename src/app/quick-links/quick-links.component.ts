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
        txt: "Manage Long Term Plan",
        url: "/manageCycleCountRequests"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/replenishment.png",
        txt: "Manage Replenishment Forecast",
        url: "/externalStockTransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageOrder.png",
        txt: "Manage Order",
        url: "/internalstocktransfer"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageTank.png",
        txt: "Manage ASN",
        url: "/createPackage"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageShipment.png",
        txt: "Manage Shipment"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageCapacity.png",
        txt: "Manage Capacity"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageactiveIngradient.png",
        txt: "Manage Invoice"
      },
      {
        img: "https://gepmtstorage.blob.core.windows.net/smart2ux/Demo/demo-forecast/dist/assets/images/quickLinks/seller/manageleadTime.png",
        txt: "Manage Lead Time"
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
