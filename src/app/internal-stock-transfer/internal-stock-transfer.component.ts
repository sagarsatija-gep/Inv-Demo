import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-internal-stock-transfer',
  templateUrl: './internal-stock-transfer.component.html',
  styleUrls: ['./internal-stock-transfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternalStockTransferComponent implements OnInit {

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
        collapsible: true,
        isOpen: false,
        data: {
          componentName: 'tabComponent',
          haveButton: false,
          data:[
            {
              tabName: 'Line',
              tabcomponent: 'widgetTable',
              tabData:  {
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
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    // classes: 'text-left',

                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Order Quantity',
                    colSize: '100px',
                    classes: 'text-right',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Open Quantity',
                    colSize: '100px',
                    classes: 'text-right',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Shipped Quantity',
                    colSize: '100px',
                    classes: 'text-right',
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
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '20',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '25',
                      tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '08/21/2019',
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
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '50',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '50',
                      tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '08/21/2019',
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
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '100',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '100',
                      tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '08/22/2019',
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
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '80',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '80',
                      tdClasses: 'text-right'
                      // classes: 'input-small rounded-sm border-secondary text-right'
                    },
                    {
                      type: 'text',
                      value: '08/22/2019',
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

            },
            {
              tabName: 'Where',
              tabcomponent: 'widgetTable',
              tabData:  {
                colConfig: [
                  {
                    type: 'checkbox',
                    name: 'Reservation #',
                    styles: {'width': '2%'},
                  },
                  {
                    type: 'text',
                    name: 'Reservation #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Reservation Line #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Item #',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: '',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Goods Recipient',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Unloading Point',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Line Comments',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                    classes:  'text-left'
                  }
                ],
                values: [
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '1',
                    },
                    {
                      type: 'text',
                      value: '43335779'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-large rounded-sm border-secondary'
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '2',
                    },
                    {
                      type: 'text',
                      value: '55430224',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-large rounded-sm border-secondary'
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '3',
                    },
                    {
                      type: 'text',
                      value: '55436655',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-large rounded-sm border-secondary'
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '4',
                    },
                    {
                      type: 'text',
                      value: '55437754',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-medium rounded-sm border-secondary'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'input-large rounded-sm border-secondary'
                    }
                  ]
                ]
              }

            },
            {
              tabName: 'Accounting',
              tabcomponent: 'widgetTable',
              tabData:  {
                colConfig: [
                  {
                    type: 'checkbox',
                    name: 'Reservation #',
                    styles: {'width': '2%'},
                  },
                  {
                    type: 'text',
                    name: 'Reservation #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Reservation Line #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Item #',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: '',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Movement Type',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Cost Center',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'WBS Element',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'WO/IO#',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  }
                ],
                values: [
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '1',
                    },
                    {
                      type: 'text',
                      value: '43335779',
                    },
                    {
                      type: 'dropdown',
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'CC001',
                        'CC0012'
                    ],
                      selectedValue:'CC001',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '55',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '2',
                    },
                    {
                      type: 'text',
                      value: '55430224',
                    },
                    {
                      type: 'dropdown',
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'CC001',
                        'CC0011'
                    ],
                      selectedValue:'CC001',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '55',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '3',
                    },
                    {
                      type: 'text',
                      value: '55436655',
                    },
                    {
                      type: 'dropdown',
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'CC001',
                        'CC0011'
                    ],
                      selectedValue:'CC001',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '55',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: 'false',
                    },
                    {
                      type: 'text',
                      value: 'R4544322',
                    },
                    {
                      type: 'text',
                      value: '4',
                    },
                    {
                      type: 'text',
                      value: '55437754',
                    },
                    {
                      type: 'dropdown',
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'CC001',
                        'CC0011'
                    ],
                      selectedValue:'CC001',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '55',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    }
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
