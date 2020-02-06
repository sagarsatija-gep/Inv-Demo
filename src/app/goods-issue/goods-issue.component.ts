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
        classes: 'text-progress',
        data: {
          componentName: 'goodsIssueDetails',
          isSubDetails: false,//for subDetails components
          data: [
            {
              editable: true,
              classes: 'bg-gray',
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
              classes: 'bg-gray',
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
              classes: 'bg-gray',
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
              classes: 'bg-gray',
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
              classes: 'bg-gray',
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
              classes: 'bg-gray',
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
              classes: 'bg-gray',
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
                  selectedValue: 'Issue For Cost Center',
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
          data: [
            {
              tabName: 'Line',
              tabcomponent: 'modifyWidgetTable',
              tabData:  {
                colConfig: [
                  {
                    type: 'checkbox',
                    valueType: 'checkbox',
                    name: 'Reservation #',
                    colStyles: {'width': '2%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation #',
                    colSize: '100px',
                    classes: 'text-primary'
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation Line #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Item #',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: '',
                    colStyles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation Qty',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Remaining Qty',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'On-Hand Qty',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Issue Qty',
                    colSize: '100px',
                    colStyles: {'width': '8%'},
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'UOM',
                    colSize: '100px',
                    colStyles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'toggle',
                    name: 'Is Final',
                    colSize: '100px',
                    colStyles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Requested Date',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  }
                ],
                values: [
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322' ,
                    },
                    {
                      value: '1',
                    },
                    {
                      value: '43335779',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: 'EA',
                    },
                    {
                      value: true,
                    },
                    {
                      value: '10/28/2019',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '2',
                    },
                    {
                      value: '55430224',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: 'EA',
                    },
                    {
                      value: false,
                    },
                    {
                      value: '10/28/2019',
                    }
                  ],
                  [
                    {
                      value: false,
                    },
                    {
                      value: 'R4544322', 
                    },
                    {
                      value: '3',
                    },
                    {
                      value: '55436655',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: 'EA',
                    },
                    {
                      value: false,
                    },
                    {
                      value: '10/28/2019',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '4',
                    },
                    {
                      value: '55437754',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    },
                    {
                      value: 'EA',
                    },
                    {
                      value: false,
                    },
                    {
                      value: '10/28/2019',
                    }
                  ]
                ]
              }

            },
            {
              tabName: 'Where',
              tabcomponent: 'modifyWidgetTable',
              tabData:  {
                colConfig: [
                  {
                    type: 'checkbox',
                    valueType: 'checkbox',
                    name: 'Reservation #',
                    colStyles: {'width': '2%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation #',
                    colSize: '100px',
                    classes: 'text-primary' ,
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation Line #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Item #',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: '',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Goods Recipient',
                    colSize: '100px',
                    classes: 'input-medium rounded-sm border-secondary'

                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Unloading Point',
                    colSize: '100px',
                    classes: 'input-medium rounded-sm border-secondary'

                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Line Comments',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                    colClasses:  'text-left',
                    classes: 'input-large rounded-sm border-secondary'

                  }
                ],
                values: [
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322', 
                    },
                    {
                      value: '1',
                    },
                    {
                      value: '43335779'
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '2',
                    },
                    {
                      value: '55430224',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '3',
                    },
                    {
                      value: '55436655',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '4',
                    },
                    {
                      value: '55437754',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    }
                  ]
                ]
              }

            },
            {
              tabName: 'Accounting',
              tabcomponent: 'modifyWidgetTable',
              tabData:  {
                colConfig: [
                  {
                    type: 'checkbox',
                    valueType: 'checkbox',
                    name: 'Reservation #',
                    colStyles: {'width': '2%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation #',
                    colSize: '100px',
                    classes: 'text-primary' ,
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Reservation Line #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'text',
                    name: 'Item #',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: '',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'dropdown',
                    name: 'Movement Type',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'dropdown',
                    name: 'Cost Center',
                    colSize: '100px',
                    classes: 'rounded-sm border-secondary input-large',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'WBS Element',
                    colSize: '100px',
                    classes: 'rounded-sm border-secondary input-small text-right'
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'WO/IO#',
                    colSize: '100px',
                    classes: 'rounded-sm border-secondary input-small text-right'
                    // styles: {'width': '30%'},
                  }
                ],
                values: [
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '1',
                    },
                    {
                      value: '43335779',
                    },
                    {
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                      ],
                      selectedValue: 'Issue For Cost Center',
                    },
                    {                     
                      value: [
                        'CC001',
                        'CC0012'
                      ],
                      selectedValue: 'CC001',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322', 
                    },
                    {
                      value: '2',
                    },
                    {
                      value: '55430224',
                    },
                    {
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                      ],
                      selectedValue: 'Issue For Cost Center',
                    },
                    {
                      value: [
                        'CC001',
                        'CC0011'
                      ],
                      selectedValue: 'CC001',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322',
                    },
                    {
                      value: '3',
                    },
                    {
                      value: '55436655',
                    },
                    {
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                      ],
                      selectedValue: 'Issue For Cost Center',
                    },
                    {
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'CC001',
                        'CC0011'
                      ],
                      selectedValue: 'CC001',
                    },
                    {
                      value: '70',
                    },
                    {
                      value: '55',
                    }
                  ],
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: 'R4544322', 
                    },
                    {
                      value: '4',
                    },
                    {
                      value: '55437754',
                    },
                    {
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                      ],
                      selectedValue: 'Issue For Cost Center',
                    },
                    {
                      value: [
                        'CC001',
                        'CC0011'
                      ],
                      selectedValue: 'CC001',
                    },
                    {
                      value: '70',
                    },
                    {
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
