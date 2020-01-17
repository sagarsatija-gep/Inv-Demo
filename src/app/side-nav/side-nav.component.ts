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
    name: "Dashboard",
    link:"dashboard"
  },
  {
    icon: "#icon_Analyze", 
    name: "Analytics",
    link:"analytics"
  },
  {
    icon: "#icon_Notificatio",
    name: "Situation",
    link:"situation-room"
  },
  {
    icon: "#icon_Supplier",
    name: "Subscription",
    link:"subscription"
  }, {
    icon: "#icon_Settings",
    name: " Settings",
    link:"settings"
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
