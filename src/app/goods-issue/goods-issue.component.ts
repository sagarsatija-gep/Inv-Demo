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
          componentName: 'widgetTable',
          data: {
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
                  type: 'text',
                  value: 'true',
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
                  type: 'text',
                  value: 'true',
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
                  type: 'text',
                  value: 'true',
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
                  type: 'text',
                  value: 'true',
                },
                {
                  type: 'text',
                  value: '10/28/2019',
                }
              ]
            ]
          }
        }
      }
    }
]
  constructor() { }

  ngOnInit() {
  }

}
