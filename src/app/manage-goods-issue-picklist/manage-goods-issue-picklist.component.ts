import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-manage-goods-issue-picklist',
  templateUrl: './manage-goods-issue-picklist.component.html',
  styleUrls: ['./manage-goods-issue-picklist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageGoodsIssuePicklistComponent implements OnInit {

  widgetData = [{
      'HeaderData': {
        name: 'Goods Issue Details',
        isOpen: true,
        collapsible: false,
        status: 'Completed',
        classes: 'text-success',
        data: {
          componentName: 'manageGoodsIssue',
          isSubDetails: false, //for subDetails components
          data: [{
              editable: true,
              data: [{
                  type: 'textBox',
                  name: 'Goods Issue Number',
                  value: '87609',
                  editable: true,
                },
                {
                  type: 'barcode',
                  name: 'BarCode',
                  value: ' ',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Goods Issue Name',
                value: '87609',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Division',
                value: 'CH-US',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Company',
                value: 'Chevron PS',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Plant',
                value: 'DRPS',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'User Name',
                value: 'JoHn Smith',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'barcode',
                name: 'Pick List Barcode',
                value: '1232',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Pick List Number',
                value: '44540023',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Comments',
                value: '',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Material Slip',
                value: '1232',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Bill of Landing',
                value: '1232',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Gr/gl slip No.',
                value: '1232',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Delivery Note',
                value: '1232',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Document Date',
                value: '10/24/2019',
                editable: false,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Posted Date',
                value: '10/24/2019',
                editable: false,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Movement Type',
                value: 'Issue For Cost Center',
                selectedValue: 'Issue For Cost Center',
                editable: true,
              }]
            },
            {
              editable: true,
              data: [{
                type: 'text',
                name: 'Interface Status',
                value: 'Accepted By ERP',
                editable: true,
                classes: 'text-primary'
              }]
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
          closeBtn: true,
          data: [{
              tabName: 'Line',
              tabcomponent: 'widgetTable',
              tabData: {
                colConfig: [{
                    type: 'checkbox',
                    name: 'Reservation #',
                    styles: {
                      'width': '2%'
                    },
                  },
                  {
                    type: 'text',
                    name: 'Reservation #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Reservation Line #',
                    colSize: '100px',
                    classes: ' ',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Item #',
                    colSize: '100px',
                    // styles: {'background-color': 'rebeccapurple'},
                    classes: '',
                    styles: {
                      'width': '8%'
                    },
                  },
                  {
                    type: 'text',
                    name: 'Reservation Qty',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Remaining Qty',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'On-Hand Qty',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  },
                  {
                    type: 'text',
                    name: 'Issue Qty',
                    colSize: '100px',
                    styles: {
                      'width': '8%'
                    },
                  },
                  {
                    type: 'text',
                    name: 'UOM',
                    colSize: '100px',
                    styles: {
                      'width': '8%'
                    },
                  },
                  {
                    type: 'text',
                    name: 'Is Final',
                    colSize: '100px',
                    styles: {
                      'width': '8%'
                    },
                  },
                  {
                    type: 'text',
                    name: 'Requested Date',
                    colSize: '100px',
                    // styles: {'width': '8%'},
                  }
                ],
                values: [
                  [{
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
                      classes: 'text-primary'
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
                      type: 'text',
                      value: '55',
                      classes: 'text-right'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: 'YES',
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
                    }
                  ],
                  [{
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
                      classes: 'text-primary'
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
                      type: 'text',
                      value: '55',
                      classes: 'text-right'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: 'NO',
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
                    }
                  ],
                  [{
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
                      classes: 'text-primary'
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
                      type: 'text',
                      value: '55',
                      classes: 'text-right'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: 'NO',
                    },
                    {
                      type: 'text',
                      value: '10/28/2019',
                    }
                  ],
                  [{
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
                      classes: 'text-primary'
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
                      type: 'text',
                      value: '55',
                      classes: 'text-right'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'text',
                      value: 'NO',
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
              tabData: {
                colConfig: [{
                    type: 'checkbox',
                    name: 'Reservation #',
                    styles: {
                      'width': '2%'
                    },
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
                    classes: 'text-left'
                  }
                ],
                values: [
                  [{
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
                      type: 'text',
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    }
                  ],
                  [{
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
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    }
                  ],
                  [{
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
                      type: 'text',
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    }
                  ],
                  [{
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
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    },
                    {
                      type: 'text',
                      value: '',
                      classes: ''
                    }
                  ]
                ]
              }

            },
            {
              tabName: 'Accounting',
              tabcomponent: 'widgetTable',
              tabData: {
                colConfig: [{
                    type: 'checkbox',
                    name: 'Reservation #',
                    styles: {
                      'width': '2%'
                    },
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
                    name: 'Profit Center',
                    colSize: '100px',
                  },
                  {
                    type: 'text',
                    name: 'Cost Center',
                    colSize: '100px',
                    // styles: {'width': '30%'},
                  },
                  {
                    type: 'text',
                    name: 'Project',
                    colSize: '100px',
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
                  [{
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
                      value: 'Issue For Cost Center',
                    },
                    {
                      type: 'text',
                      value: ' ',
                    },
                    {
                      type: 'text',
                      value:'CC001',
                    },
                    {
                      type: 'text',
                      value: ' ',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '',
                    }
                  ],
                  [{
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
                    value: 'Issue For Cost Center',
                  },
                  {
                    type: 'text',
                    value: ' ',
                  },
                  {
                    type: 'text',
                    value:'CC001',
                  },
                  {
                    type: 'text',
                    value: ' ',
                  },
                  {
                    type: 'text',
                    value: '',
                  },
                  {
                    type: 'text',
                    value: '',
                  }
                  ],
                  [{
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
                    type: 'text',
                    value: 'Issue For Cost Center',
                  },
                  {
                    type: 'text',
                    value: ' ',
                  },
                  {
                    type: 'text',
                    value:'CC001',
                  },
                  {
                    type: 'text',
                    value: ' ',
                  },
                  {
                    type: 'text',
                    value: '',
                  },
                  {
                    type: 'text',
                    value: '',
                  }
                  ],
                  [{
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
                    value: 'Issue For Cost Center',
                  },
                  {
                    type: 'text',
                    value: ' ',
                  },
                  {
                    type: 'text',
                    value:'CC001',
                  },
                  {
                    type: 'text',
                    value: ' ',
                  },
                  {
                    type: 'text',
                    value: '',
                  },
                  {
                    type: 'text',
                    value: '',
                  }
                ],
                ]
              }

            }
          ]
        }
      }
    }
  ];
  constructor() {}

  ngOnInit() {}

}
