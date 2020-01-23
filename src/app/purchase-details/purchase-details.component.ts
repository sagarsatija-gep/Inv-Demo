import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PurchaseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  widgetData = [
    {
      'HeaderData': {
        name: 'Header Details',
        isOpen: true,
        collapsible: true,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type:'textbox',
              name: 'ASN Number',
              values: '6001068586806',
            },
            {
              type:'textbox',
              name: 'Supplier Shipment Number',
              values: '2183',
            },{
              type:'textbox',
              name: 'Order Number',
              values: '8585002483034',
            },
            {
              type:'text',
              name: 'Supplier Name',
              values: 'Motion Industries Inc',
            }
          ]
        }
      }
    },
    {
        'HeaderData': {
          name: 'Line Details',
          isOpen: false,
          collapsible: true,
          data: {
            componentName: 'tabComponent',
            haveButton: false,
            data: [
              {
                tabName: 'Line',
                tabcomponent: 'table',
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
                tabcomponent: 'table',
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
    },
    {
      'HeaderData': {
        name: 'Related Documents',
        isOpen: false,
        collapsible: true,
        data: {
          componentName: 'tabComponent',
          haveButton: false,
          data: [
            {
              tabName: 'Order',
              tabcomponent: 'table',
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
              tabName: 'ASN',
              tabcomponent: 'table',
              tabData: [
                {
                  docName: "Receipt# 001005463468",
                  createdDate: "11/06/2019",
                  lastAccessed: "11/06/2019 7:03 PM"
                }
              ]
            },
            {
              tabName: 'Receipt',
              tabcomponent: 'table',
              tabData: [
                {
                  docName: "Receipt# 001005463468",
                  createdDate: "11/06/2019",
                  lastAccessed: "11/06/2019 7:03 PM"
                }
              ]
            },
            {
              tabName: 'Invoice',
              tabcomponent: 'table',
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
  },
  {
    'HeaderData': {
      name: 'Notes & Attachements',
      isOpen: false,
      collapsible: true,
      data: {
        componentName: 'Attachement'
      }
    }
  }
]

}
