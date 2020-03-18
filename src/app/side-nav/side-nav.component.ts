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
  clicked(e){
    if(e){
      this.open=!this.open;
    }
    
  }

  sideNav = [{
    icon: "#icon_DashboardRe",
    name: "Home",
    link:"home",
    dropdown:false,
    
  },{
    icon: "#icon_DashboardRe",
    name: "Dashboard",
    link: "dashboard",
    dropdown:true,
    sideMenu:[
      {
        name:"Inventory Visibility",
        value:"dashboard"
      },
      {
        name:"Inventory Planning",
        value:"dashboard"
      }
       ]
 
  },
  {
    icon: "#icon_Analyze", 
    name: "Manage Transactions",
    link:"manageReservations",
    dropdown:true,
    sideMenu:[
      {
        name:"Manage Reservations",
        value:"manageReservations"
      },
      {
        name:"Manage Packing Slip",
        value:"managePackingList"
      },
      {
        name:"Manage Pick List",
        value:"managePicklist"
      },
      {
        name:"Manage Goods Issue/Reversal",
        value:"goods"
      },
      {
        name:"Material Discrepancy",
        value:"manage-discrepancy"
      }
     
    ]
    
  },
  {
    icon: "#icon_Notificatio",
    name: "Create Transactions",
    link:"createtransactions",
    dropdown:true,
    sideMenu:[
      {
        name:"Goods Receipt",
        value:"poGoodsReceipt"
      },
      {
        name:"Goods Issue",
        value:"goods"
      },
      {
        name:"Request for Goods Issue",
        value:"manageGoodsIssue"
      },
      {
        name:"Cycle Count",
        value:""
      },
      {
        name:"Stock Transfer",
        value:"internalstocktransfer"
      },
      {
        name:"Issue Log",
        value:""
      },
      {
        name:"Stock Movement",
        value:""
      }
    ]
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
