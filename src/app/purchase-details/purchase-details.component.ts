import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
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
        data: {
          componentName: 'details',
          isSubDetails: true,
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
          ],
          subDetailsData: [
            {
              subHeader: 'Terms',
              isOpen: false,
              data:[
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
                }
              ]
            },
            {
              subHeader: 'Contact Details',
              isOpen: false,
              data:[
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
                }
              ]
            }
          ]
        }
      }
    },
    {
      'HeaderData': {
        name: 'Line Details',
        isOpen: false,
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
  },
  {
    'HeaderData': {
      name: 'Related Documents',
      isOpen: false,
      data: {
        componentName: 'tabComponent',
        data: [
          {
            tabName: 'Order',
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
    data: {
      componentName: 'Attachement'
    }
  }
}
]

}
