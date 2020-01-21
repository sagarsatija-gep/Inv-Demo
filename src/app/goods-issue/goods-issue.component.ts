import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-issue',
  templateUrl: './goods-issue.component.html',
  styleUrls: ['./goods-issue.component.css']
})
export class GoodsIssueComponent implements OnInit {

  widgetData = [
    {
      'HeaderData': {
        name: 'Header Details',
        isOpen: true,
        collapsible: false,
        status: 'In Progress',
        data: {
          componentName: 'details',
          isSubDetails: false,//for subDetails components
          data: [
            {
              name: 'Requaitions Name',
              values: 'PR for Supplies',
            },
            {
              name: 'Requaitions Number',
              values: 'PR1234',
            },{
              name: 'Requestor',
              values: 'Keanu Reaves',
            },
            {
              name: 'Business Unit',
              values: 'MBM Tech',
            },{
              name: 'Purchase Type',
              values: 'Material',
            },
            {
              name: 'Contract Number',
              values: 'CN-1234',
            },{
              name: 'Last Modified',
              values: '11/12/2019',
            },
            {
              name: 'Total PR',
              values: '$990k',
            },{
              name: 'Currenct',
              values: 'USD',
            }
          ]
        }
      }
    },
    {
      'HeaderData': {
        name: '',
        collapsible: false,
        isOpen: true,
        data: {
          componentName: 'tabComponent',
          data: [
            {
              tabName: 'Line',
              tabData: [
                {
                  docName: "Receipt# 001005463468",
                  createdDate: "11/06/2019",
                  lastAccessed: "11/06/2019 7:03 PM"
                },
                {
                  docName: "Receipt# 001005463468",
                  createdDate: "11/06/2019",
                  lastAccessed: "11/06/2019 7:03 PM"
                },
                {
                  docName: "Receipt# 001005463468",
                  createdDate: "11/06/2019",
                  lastAccessed: "11/06/2019 7:03 PM"
                }
              ] 
            },
            {
              tabName: 'Accounting',
              tabData: [
                {
                  docName: "Receipt# 001005463468",
                  createdDate: "11/06/2019",
                  lastAccessed: "11/06/2019 7:03 PM"
                }
              ]
            }
          ]
        }
      }
    }
]
  constructor() { }

  ngOnInit() {
  }

}
