import { Component, OnInit, ViewChild } from '@angular/core';
// import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  opened: boolean = false;
  @ViewChild('sidenav') graph;
click(){
  this.opened=!this.opened;
}
  sideNav = [{
    icon: "#icon_DashboardRe",
    name: "Home",
    link:"home"
  },{
    icon: "#icon_DashboardRe",
    name: "Dashboard",
    link:"dashboard"
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
    link:"reports"
  },
  {
    icon: "#icon_Settings",
    name: "Inventory Setup",
    link:"inventorysetup"
  }
  ];


  constructor() { }

  ngOnInit() {

    // this.SharedService.toggleThePannel.subscribe(data => {
    //   console.log(data)
    //   this.graph.toggle();
    // })
  }
}
