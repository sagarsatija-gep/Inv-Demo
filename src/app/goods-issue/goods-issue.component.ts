import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-goods-issue',
  templateUrl: './goods-issue.component.html',
  styleUrls: ['./goods-issue.component.css']
})
export class GoodsIssueComponent implements OnInit {

  pipe = new DatePipe('en-US');
  widgetData = [
    {
      'HeaderData': {
        name: 'Header Details',
        isOpen: true,
        collapsible: false,
        status: 'In Progress',
        data: {
          componentName: 'goodsIssueDetails',
          isSubDetails: false,//for subDetails components
          data: [
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Goods Issue Number',
                  value: '1232',
                  editable: true,
                },
                {
                  type: 'textBox',
                  name: 'BarCode',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Goods Issue Name',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Division',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Company',
                  value: 'Chevron PS',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Plant',
                  value: 'DRPS',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'User Name',
                  value: 'Jhon Smith',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'barCode',
                  name: 'Pick List Barcode',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Pick List Number',
                  value: '44540023',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Comments',
                  value: '',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Material Slip',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Bill of Landing',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Gr/gl slip No.',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Delivery Note',
                  value: '1232',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'date',
                  name: 'Document Date',
                  value: this.pipe.transform('10-24-2019', 'mm-dd-yyyy'),
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'date',
                  name: 'Posted Date',
                  value: this.pipe.transform('10/24/2019', 'MM/dd/yyyy'),
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'dropDown',
                  name: 'Posted Date',
                  value: 'dropDown',
                  editable: true,
                }
              ]
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
