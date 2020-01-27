import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-po-details',
  templateUrl: './po-details.component.html',
  styleUrls: ['./po-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PoDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  widgetData = [
    {
      'HeaderData': {
        name: 'Basic Details',
        isOpen: true,
        collapsible: true,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type:'textbox',
              name: 'PO Number',
              values: '8585002483034',
            },
            {
              type:'textbox',
              name: 'Revision Number',
              values: '001',
            },{
              type:'textbox',
              name: 'PO Name',
              values: 'Work Order-1401',
            },
            {
              type:'text',
              name: 'PO Contact',
              values: 'Thomas R Brown',
            },
            {
              type:'text',
              name: 'Creation Date',
              values: 'Creation Date',
            },
            {
              type:'text',
              name: 'Original Issue Date',
              values: '03/23/2019',
            }
          ]
        }
      }
    },
    {
      'HeaderData': {
        name: 'Lines Details',
        collapsible: true,
        isOpen: false,
        data: {
          componentName: 'tabComponent',
          haveButton: false,
          data:[
            {
              tabName: 'Lines',
              tabcomponent: 'widgetTable',
              tabData:  {
                tablerowClass: 'bg-white',
                colConfig: [
                  {
                    type: 'text',
                    name: 'Line Number',
                    colSize: '100px',
                    classes: ' ',
                  },
                  {
                    type: 'text',
                    name: 'Item Number',
                    colSize: '100px',
                    classes: ' ',
                  },
                  {
                    type: 'text',
                    name: 'Line Description',
                    colSize: '100px',
                    classes: 'text-left',
                  },
                  {
                    type: 'text',
                    name: 'Order Quantity',
                    colSize: '100px',
                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '100px',
                  },
                  {
                    type: 'text',
                    name: 'Unit Price',
                    colSize: '100px',
                    classes: 'text-right',
                  },
                  {
                    type: 'text',
                    name: 'Need By Date',
                    colSize: '100px',
                    classes: 'text-right',
                  },
                  {
                    type: 'text',
                    name: 'Line Total',
                    colSize: '100px',
                    classes: 'text-right',
                  }
                ],
                values: [
                  [
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
                      value: '77',
                    },
                    {
                      type: 'text',
                      value: 'Piece',
                    },
                    {
                      type: 'text',
                      value: '199.99',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '8/20/2019',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '16661.97',
                      tdClasses: 'text-right'
                    }
                  ],
                  [
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
                      value: '130',
                    },
                    {
                      type: 'text',
                      value: 'Each',
                    },
                    {
                      type: 'text',
                      value: '119.00',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '8/20/2019',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '16738.54',
                      tdClasses: 'text-right'
                    }
                  ],
                  [
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
                      value: '200',
                    },
                    {
                      type: 'text',
                      value: 'Each',
                    },
                    {
                      type: 'text',
                      value: '89.99',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '8/20/2019',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '19473.84',
                      tdClasses: 'text-right'
                    }
                  ],
                  [
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
                      value: '80',
                    },
                    {
                      type: 'text',
                      value: 'Piece',
                    },
                    {
                      type: 'text',
                      value: '72.00',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '8/20/2019',
                      tdClasses: 'text-right'
                    },
                    {
                      type: 'text',
                      value: '6232.32',
                      tdClasses: 'text-right'
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
        name: 'Invoicing And Delivery Status',
        isOpen: false,
        collapsible: true,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type:'textbox',
              name: 'Bill To Location',
              values: 'Kenilworth',
            },
            {
              type:'textbox',
              name: 'Ship To Location',
              values: 'Westborough',
            }
          ]
        }
      }
    },
    {
      'HeaderData': {
        name: 'Supplier Details',
        isOpen: false,
        collapsible: true,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type:'textbox',
              name: 'Supplier Name',
              values: 'Motion Industries Inc.',
            },
            {
              type:'textbox',
              name: 'Supplier Contact',
              values: 'Kim Powell',
            },
            {
              type:'textbox',
              name: 'Payment Terms',
              values: 'Net 45',
            },
            {
              type:'text',
              name: 'E-mail',
              values: 'kim.powell@motionind.com',
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
        componentName: 'Attachement',
        numberOfInput: "three"
      }
    }
  }
]

}
