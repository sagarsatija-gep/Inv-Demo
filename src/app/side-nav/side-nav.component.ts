import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  opened: boolean = true;
  open: boolean = true;
  @ViewChild('sidenav') graph;
  clicked(){
    this.open=!this.open;
  }

  sideNav = [{
    icon: "#icon_DashboardRe",
    name: "Home",
    link:"home",
    dropdown:true,
    sideMenu:[
      "Inventory Visibility",
      "Inventory Planning"
    ]
  },{
    icon: "#icon_DashboardRe",
    name: "Dashboard",
    link: "dashboard",
    dropdown:true,
    sideMenu:[
      "Manage Reservations",
      "Manage Packing Slip",
      "Manage Pick List",
      "Manage Goods Issue/Reversal"
    ]
  },
  {
    icon: "#icon_Analyze", 
    name: "Manage Transactions",
    link:"manageReservations",
    dropdown:true,
    sideMenu:[
      "Goods Receipt",
      "Goods Issue",
      "Request for Goods Issue",
      "Cycle Count",
      "Manage Packing Request",
      "Stock Transfer",
      "Issue Log",
      "Stock Movement"

    ]
  },
  {
    icon: "#icon_Notificatio",
    name: "Create Transactions",
    link:"createtransactions",
    dropdown:false
  },
  {
    icon: "#icon_Supplier",
    name: "Current Stock Balance",
    link:"currentstockbalance",
    dropdown:false
  }, {
    icon: "#icon_Settings",
    name: "Reports",
    link:"purchaseDetails",
    dropdown:false
  },
  {
    icon: "#icon_Settings",
    name: "Inventory Setup",
    link:"inventorysetup",
    dropdown:false
  }
  ];


  constructor(private toggleService: ToggleService) { }

  ngOnInit() {
    this.toggleService.toggleThePannel.subscribe(data => {
      this.graph.toggle();
    })
  }
}
