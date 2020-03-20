import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-material-request-form',
  templateUrl: './create-material-request-form.component.html',
  styleUrls: ['./create-material-request-form.component.css']
})
export class CreateMaterialRequestFormComponent implements OnInit {
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
                  name: 'Material Request No',
                  value: '12345',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Material Request Name',
                  value: 'Request 1',
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
                  value: '12345',
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
                  name: 'BU Company',
                  value: 'BU1',
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
                  name: 'Plant Code',
                  value: 'PC1',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'textBox',
                  name: 'Movement Type',
                  value: 'Cost Center',
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
                  value: '02-02-2020',
                  editable: true,
                }
              ]
            },
            {
              editable: true,
              data: [
                {
                  type: 'choosedate',
                  name: 'Posting Date',
                  value: '02-02-2020',
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
          createMaterialRequestFormButton: true,
          data: [
            {
              tabName: 'Line',
              tabcomponent: 'modifyWidgetTable',
              tabData: {
                colConfig: [
                  {
                    type: 'checkbox',
                    valueType: 'checkbox',
                    name: '#',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Line #',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Item #',
                    classes: 'input-small rounded-sm border-secondary text-right text-primary'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Item Description',
                    classes: 'input-small rounded-sm border-secondary text-right',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Plant Code',
                    classes: 'input-small rounded-sm border-secondary text-right',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Storage Location',
                    classes: 'input-small rounded-sm border-secondary text-right',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Storage Bin',
                    classes: 'input-small rounded-sm border-secondary text-right',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Qty',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'UOM',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  }
                ],
                values: [
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
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
              tabName: 'Where',
              tabcomponent: 'modifyWidgetTable',
              tabData: {
                colConfig: [
                  {
                    type: 'checkbox',
                    valueType: 'checkbox',
                    name: '#',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Line #',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Item #',
                    classes: 'input-small rounded-sm border-secondary text-right text-primary'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Item Description',
                    classes: 'input-small rounded-sm border-secondary text-right',
                    // styles: {'background-color': 'rebeccapurple'}
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Goods Recipient',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Unloading Point',
                    colSize: '100px',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Line Comments',
                    colClasses: 'text-left',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  }
                ],
                values: [
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: ''
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
              tabData: {
                colConfig: [
                  {
                    type: 'checkbox',
                    valueType: 'checkbox',
                    name: '#',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Line #',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Item #',
                    classes: 'input-small rounded-sm border-secondary text-right text-primary'
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Item Description',
                    classes: 'input-small rounded-sm border-secondary text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'dropdown',
                    name: 'Movement Type',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'WBS Element',
                    classes: 'rounded-sm border-secondary input-small text-right'
                  },
                  {
                    type: 'text',
                    valueType: 'dropdown',
                    name: 'Cost Center',
                  },
                  {
                    type: 'text',
                    valueType: 'textbox',
                    name: 'Work Order',
                    classes: 'rounded-sm border-secondary input-small text-right'
                  }
                ],
                values: [
                  [
                    {
                      value: 'false',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: [
                        'Issue For Cost Center',
                        'Issue For Cost Center1'
                      ],
                      selectedValue: '',
                    },
                    {
                      value: '',
                    },
                    {
                      value: [
                        'CC001',
                        'CC0012'
                      ],
                      selectedValue: '',
                    },
                    {
                      value: '',
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
