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
              type: 'textbox',
              name: 'ASN Number',
              values: '6001068586806',
            },
            {
              type: 'textbox',
              name: 'Supplier Shipment Number',
              values: '2183',
            }, {
              type: 'textbox',
              name: 'Order Number',
              values: '8585002483034',
            },
            {
              type: 'text',
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
        collapsible: true,
        isOpen: false,
        data: {
          componentName: 'tabComponent',
          haveButton: false,
          data: [
            {
              tabName: 'Line',
              tabcomponent: 'widgetTable',
              tabData: {
                tablerowClass: 'bg-white',
                colConfig: [
                  // {
                  //   type: 'checkbox',
                  //   name: 'Reservation #',
                  //   styles: {'width': '2%'},
                  // },
                  {
                    type: 'text',
                    name: 'Line Number',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Item Number',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Line Description',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: 'text-left',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Supplier Item Number',
                    colSize: '150px',
                    // styles: {'background-color': 'rebeccapurple'},
                    // classes: 'text-left',

                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '50px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Order Quantity',
                    colSize: '100px',
                    // classes: 'text-right',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Open Quantity',
                    colSize: '100px',
                    // classes: 'text-right',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Shipped Quantity',
                    colSize: '100px',
                    // classes: 'text-right',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Promised Delivery Date',
                    colSize: '100px',
                    classes: 'text-left',
                    // styles: {'width': '8%'},
                  },
                  // {
                  //   type: 'text',
                  //   name: 'Is Final',
                  //   colSize: '100px',
                  //   styles: {'width': '8%'},
                  // },
                  // {
                  //   type: 'text',
                  //   name: 'Requested Date',
                  //   colSize: '100px',
                  //   // styles: {'width': '8%'},
                  // }
                ],
                values: [
                  [
                    // {
                    //   type: 'checkbox',
                    //   value: 'false',
                    // },
                    {
                      type: 'text',
                      value: '1',
                    },
                    {
                      type: 'text',
                      value: '2063777',
                    },
                    {
                      type: 'text',
                      value: '138-7576:BRACKET ASSEMBLY',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: '800520',
                    },
                    {
                      type: 'text',
                      value: 'Piece',
                    },
                    {
                      type: 'text',
                      value: '77',
                      // tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '20',
                      // tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '25',
                      // tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '01/31/2020',
                      tdClasses: 'text-left'
                    },
                    // {
                    //   type: 'toggle',
                    //   value: true,
                    // },
                    // {
                    //   type: 'text',
                    //   value: '10/28/2019',
                    // }
                  ],
                  [
                    // {
                    //   type: 'checkbox',
                    //   value: 'false',
                    // },
                    {
                      type: 'text',
                      value: '2',
                    },
                    {
                      type: 'text',
                      value: '1010151',
                    },
                    {
                      type: 'text',
                      value: 'Milwaukee Electric Tool 48-20-5030',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: '801520',
                    },
                    {
                      type: 'text',
                      value: 'Each',
                    },
                    {
                      type: 'text',
                      value: '130',
                    },
                    {
                      type: 'text',
                      value: '50'
                    },
                    {
                      type: 'text',
                      value: '50',
                      // tdClasses: ''
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '01/31/2020',
                      tdClasses: 'text-left'
                    },
                    // {
                    //   type: 'toggle',
                    //   value: false,
                    // },
                    // {
                    //   type: 'text',
                    //   value: '10/28/2019',
                    // }
                  ],
                  [
                    // {
                    //   type: 'checkbox',
                    //   value: false,
                    // },
                    {
                      type: 'text',
                      value: '3',
                    },
                    {
                      type: 'text',
                      value: '2030539',
                    },
                    {
                      type: 'text',
                      value: 'Morse Cutting Tools 82062',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: '850520',
                    },
                    {
                      type: 'text',
                      value: 'Each',
                    },
                    {
                      type: 'text',
                      value: '200',
                      // tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '100',
                      // tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '100',
                      // tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '01/31/2020',
                      tdClasses: 'text-left'
                    },
                    // {
                    //   type: 'toggle',
                    //   value: false,
                    // },
                    // {
                    //   type: 'text',
                    //   value: '10/28/2019',
                    // }
                  ],
                  [
                    // {
                    //   type: 'checkbox',
                    //   value: 'false',
                    // },
                    {
                      type: 'text',
                      value: '4',
                    },
                    {
                      type: 'text',
                      value: '2044808',
                    },
                    {
                      type: 'text',
                      value: 'Dewalt DW4701- Saw Blade',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: '800720',
                    },
                    {
                      type: 'text',
                      value: 'Piece',
                    },
                    {
                      type: 'text',
                      value: '80',
                      // tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '80',
                      // tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '80',
                      // tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '01/31/2020',
                      tdClasses: 'text-left'
                    },
                    // {
                    //   type: 'toggle',
                    //   value: false,
                    // },
                    // {
                    //   type: 'text',
                    //   value: '10/28/2019',
                    // }
                  ]
                ]
              }

            }
          ]
        }
      }
    },
    {
      'HeaderData': {
        name: 'Shipping & Delivery Information',
        isOpen: false,
        collapsible: true,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type: 'text',
              name: 'Expected Delivery Date',
              values: '01/31/2020',
            },
            {
              type: 'text',
              name: 'Tracking No.',
              values: '1Z789T278P78216284',
            }, {
              type: 'text',
              name: 'Shipping Method',
              values: 'FedEx',
            },
            {
              type: 'textbox',
              name: 'Ship to Location',
              values: 'PMF',
            },
            {
              type: 'text',
              name: 'Ship To Address',
              values: '2219 W Park Ave, Gray, LA 70359 ',
              classes: 'col-sm-4'
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
          componentName: 'widgetTable',
          haveButton: false,
          data:
          {

            tablerowClass: 'bg-white',
            colConfig: [
              {
                type: 'checkbox',
                name: 'Reservation #',
                classes: 'text-left',
                // styles: {'width': '%'},
              },
              {
                type: 'text',
                name: 'Name',
                // colSize: '100px',
                classes: 'text-left',
                // styles: {'width': '8%'},
              },
              {
                type: 'text',
                name: 'Type',
                // colSize: '100px',
                classes: ' ',
                // styles: {'width': '8%'},
              },
              {
                type: 'text',
                name: 'Classification',
                colSize: '100px',
                // styles: {'background-color': 'rebeccapurple'},
                classes: 'text-left',
                // styles: {'width': '8%'},
              },
              {
                type: 'text',
                name: 'Added By',
                // colSize: '100px',
                // styles: {'background-color': 'rebeccapurple'},
                // classes: 'text-left',

              },
              {
                type: 'text',
                name: 'File Size',
                colSize: '100px',
                // styles: {'width': '8%'},
              },
              // {
              //   type: 'text',
              //   name: 'Order Quantity',
              //   colSize: '100px',
              //   classes: 'text-right',
              //   // styles: {'width': '8%'},
              // },
              // {
              //   type: 'text',
              //   name: 'Open Quantity',
              //   colSize: '100px',
              //   classes: 'text-right',
              //   // styles: {'width': '8%'},
              // },
              // {
              //   type: 'text',
              //   name: 'Shipped Quantity',
              //   colSize: '100px',
              //   classes: 'text-right',
              //   // styles: {'width': '8%'},
              // },
              // {
              //   type: 'text',
              //   name: 'Promised Delivery Date',
              //   colSize: '100px',
              //   classes: 'text-left',
              //   // styles: {'width': '8%'},
              // },
              // {
              //   type: 'text',
              //   name: 'Is Final',
              //   colSize: '100px',
              //   styles: {'width': '8%'},
              // },
              // {
              //   type: 'text',
              //   name: 'Requested Date',
              //   colSize: '100px',
              //   // styles: {'width': '8%'},
              // }
            ],
            values: [
              [
                {
                  type: 'checkbox',
                  value: 'false',
                  tdClasses: 'text-left'
                },
                {
                  type: 'hiperlink',
                  value: 'Bill Of Lading.pdf',
                  tdClasses: 'text-left'
                },
                {
                  type: 'text',
                  value: 'File',
                },
                {
                  type: 'text',
                  value: 'Shipping Documents',
                  tdClasses: 'text-left'
                },
                {
                  type: 'text',
                  value: 'Kim Powell',
                },
                {
                  type: 'text',
                  value: '20kb',
                },
                // {
                //   type: 'text',
                //   value: '77',
                //   tdClasses: 'text-right'
                // },
                // {
                //   type: 'text',
                //   value: '20',
                //   tdClasses: 'text-right'
                // },
                // {
                //   type: 'text',
                //   value: '25',
                //   tdClasses: 'text-right'
                //   // classes: 'input-small rounded-sm border-secondary text-right'
                // },
                // {
                //   type: 'text',
                //   value: '01/31/2020',
                //   tdClasses: 'text-left'
                // },
                // {
                //   type: 'toggle',
                //   value: true,
                // },
                // {
                //   type: 'text',
                //   value: '10/28/2019',
                // }
              ]
            ]
          }
        }
      }
    }
  ]

}
