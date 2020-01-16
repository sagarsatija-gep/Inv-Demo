import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  quickLinks : [{
    img : string,
    txt : string
  }];

  constructor() {
    this.quickLinks = [
      {
        img: "../../assets/images/quickLinks/quicklink1.png",
        txt: "Manage Cycle Count Requests"
      },
      {
        img: "../../assets/images/quickLinks/quicklink2.png",
        txt: "Manage Cycle Count Requests"
      },
      {
        img: "../../assets/images/quickLinks/quicklink3.png",
        txt: "Internal Stock Transfer"
      },
      {
        img: "../../assets/images/quickLinks/quicklink4.png",
        txt: "Manage Cycle Count Requests"
      },
      {
        img: "../../assets/images/quickLinks/quicklink5.png",
        txt: "Manage Reservations"
      },
      {
        img: "../../assets/images/quickLinks/quicklink6.png",
        txt: "Create Stock Transfer"
      },
      {
        img: "../../assets/images/quickLinks/quicklink7.png",
        txt: "Manage Goods Issue"
      },
      {
        img: "../../assets/images/quickLinks/quicklink8.png",
        txt: "Manage Cycle Count Requests"
      }
    ];
   }

  ngOnInit() {
  }

}
