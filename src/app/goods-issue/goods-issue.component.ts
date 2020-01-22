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
                  type: 'barcode',
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
                  type: 'barcode',
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
                  type: 'choosedate',
                  name: 'Document Date',
                  value: '',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'choosedate',
                  name: 'Posted Date',
                  value: '',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'dropdown',
                  name: 'Movement Type',
                  value: [
                    'Issue For Cost Center',
                    'Issue For Cost Center1'
                ],
                  selectedValue:'Issue For Cost Center',
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
          haveButton: true,
          data:[
            {
              tabName: 'Line',
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
                    name: 'Reservation Qty',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Remaining Qty',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'On-Hand Qty',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Issue Qty',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Is Final',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Requested Date',
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
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'toggle',
                      value: true,
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
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
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'toggle',
                      value: false,
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
                    }
                  ],
                  [
                    {
                      type: 'checkbox',
                      value: false,
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
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'toggle',
                      value: false,
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
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
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'toggle',
                      value: false,
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
                    }
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
                      type: 'textbox',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                    },
                    {
                      type: 'textbox',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                    },
                    {
                      type: 'textbox',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                    },
                    {
                      type: 'textbox',
                      value: '',
                    },
                    {
                      type: 'textbox',
                      value: '',
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
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
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
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
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
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
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
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                    ],
                      selectedValue:'Issue For Cost Center',
                    },
                    {
                      type: 'textbox',
                      value: '70',
                    },
                    {
                      type: 'textbox',
                      value: '55',
                    }
                  ]
                ]
              }

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
