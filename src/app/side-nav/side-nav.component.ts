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
    link:"home"
  },{
    icon: "#icon_DashboardRe",
    name: "Dashboard",
    link: "dashboard"
  },
  {
    icon: "#icon_Analyze", 
    name: "Manage Transactions",
    link:"manageReservations"
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
