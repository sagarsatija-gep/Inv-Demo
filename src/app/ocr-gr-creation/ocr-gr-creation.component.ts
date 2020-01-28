import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ocr-gr-creation',
  templateUrl: './ocr-gr-creation.component.html',
  styleUrls: ['./ocr-gr-creation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OcrGrCreationComponent implements OnInit {

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
              type: 'textbox',
              name: 'Receipt Name',
              values: '',
            },
            {
              type: 'text',
              name: 'Receipt Number',
              values: 'REC0000160',
            },
            {
              type: 'text',
              name: 'PO Number',
              values: '0060105362',
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
        isOpen: true,
        data: {
          componentName: 'tabComponent',
          haveButton: false,
          data: [
            {
              tabName: 'LINES',
              tabcomponent: 'widgetTable',
              tabData: {
                tablerowClass: 'bg-white',
                colConfig: [
                  {
                    type: 'text',
                    name: 'Line Number',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Item Number',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Line Description',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '100px'
                  },
                  {
                    type: 'text',
                    name: 'Received Quantity',
                    colSize: '100px'
                  },
                  {
                    type: 'text',
                    name: 'Storage Location',
                    colSize: '100px'
                  },
                  {
                    type: 'text',
                    name: 'QC Result',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Quality Data',
                    colSize: '100px',
                    classes: ''
                  }
                ],
                values: [
                  [
                    {
                      type: 'text',
                      value: '1'
                    },
                    {
                      type: 'text',
                      value: '3420112'
                    },
                    {
                      type: 'text',
                      value: '138-7576-Bracket Assembly',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'Each'
                    },
                    {
                      type: 'text',
                      value: '20',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'R6GM',
                        'R4GM'
                      ],
                      selectedValue: 'R6GM'
                    },
                    {
                      type: 'text',
                      value: 'Pass'
                    },
                    {
                      type: 'attachments',
                      value: '',
                    }
                  ],
                  [
                    {
                      type: 'text',
                      value: '2'
                    },
                    {
                      type: 'text',
                      value: '5462411'
                    },
                    {
                      type: 'text',
                      value: 'Morse Cutting Tools 82062',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'Each'
                    },
                    {
                      type: 'text',
                      value: '50',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'R6GM',
                        'R4GM'
                      ],
                      selectedValue: 'R6GM'
                    },
                    {
                      type: 'text',
                      value: 'Pass'
                    },
                    {
                      type: 'attachments',
                      value: '',
                    }
                  ],
                ]
              }
            },
            {
              tabName: 'ASSET MANAGEMENT',
              tabcomponent: 'widgetTable',
              tabData: {
                colConfig: [
                  {
                    type: 'checkbox',
                    name: 'Line Select',
                    styles: { 'width': '2%' },
                  },
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
                    name: 'Description',
                    colSize: '100px',
                    classes: ' ',
                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '100px',
                    classes: '',
                  },
                  {
                    type: 'text',
                    name: 'Received Quantity',
                    colSize: '100px',
                  },
                  {
                    type: 'text',
                    name: 'Serial Number',
                    colSize: '100px',
                  },
                  {
                    type: 'text',
                    name: 'Manufacturer Name',
                    colSize: '100px',
                  },
                  {
                    type: 'text',
                    name: 'Manufacturer Part Number',
                    colSize: '100px',
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
                      value: '1',
                    },
                    {
                      type: 'text',
                      value: '2063777',
                    },
                    {
                      type: 'text',
                      value: 'Bracket Assembly',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: '10',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                      value: '2',
                    },
                    {
                      type: 'text',
                      value: '2063777',
                    },
                    {
                      type: 'text',
                      value: 'Bracket Assembly',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                      value: '3',
                    },
                    {
                      type: 'text',
                      value: '2063777',
                    },
                    {
                      type: 'text',
                      value: 'Bracket Assembly',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                      value: '4',
                    },
                    {
                      type: 'text',
                      value: '2063777',
                    },
                    {
                      type: 'text',
                      value: 'Bracket Assembly',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                      value: 'packingslip.pdf',
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
                    //   value: '08/21/2019',
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
