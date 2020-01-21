import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  opened: boolean = true;
  @ViewChild('sidenav') graph;

  sideNav = [{
    icon: "#icon_DashboardRe",
    name: "Home",
    link:"home"
  },{
    icon: "#icon_DashboardRe",
    name: "Dashboard",
    link: "dashboard"
  },
  {
    icon: "#icon_Analyze", 
    name: "Manage Transactions",
    link:"managetransactions"
  },
  {
    icon: "#icon_Notificatio",
    name: "Create Transactions",
    link:"createtransactions"
  },
  {
    icon: "#icon_Supplier",
    name: "Current Stock Balance",
    link:"currentstockbalance"
  }, {
    icon: "#icon_Settings",
    name: "Reports",
    link:"purchaseDetails"
  },
  {
    icon: "#icon_Settings",
    name: "Inventory Setup",
    link:"inventorysetup"
  }
  ];


  constructor(private toggleService: ToggleService) { }

  ngOnInit() {
    this.toggleService.toggleThePannel.subscribe(data => {
      this.graph.toggle();
    })
  }
}
