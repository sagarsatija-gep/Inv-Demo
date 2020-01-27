import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-po-goods-receipt',
  templateUrl: './po-goods-receipt.component.html',
  styleUrls: ['./po-goods-receipt.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PoGoodsReceiptComponent implements OnInit {

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
              values: 'Receipt for 8585002483034',
            },
            {
              type: 'text',
              name: 'Receipt Number',
              values: '00100987210',
            }, {
              type: 'text',
              name: 'PO Number',
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
                    name: 'Accepted Quantity',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Storage Location',
                    colSize: '100px'
                  },
                  {
                    type: 'text',
                    name: 'Storage Bin',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Goods Receipent',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Unloading Point',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Serial Flag',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Batch Flag',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Climate Controlled',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Storage Conditions',
                    colSize: '100px',
                    classes: ''
                  },
                  {
                    type: 'text',
                    name: 'Attachments',
                    colSize: '100px',
                    classes: ''
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
                      value: 'Bracket Assembly',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    },
                    {
                      type: 'text',
                      value: 'C02 - 08- 2- 2',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'YES'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'UPLOAD',
                    }
                  ],
                  [
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
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    },
                    {
                      type: 'text',
                      value: 'C02 - 08- 2- 2',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'YES'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'UPLOAD',
                    }
                  ],
                  [
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
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    },
                    {
                      type: 'text',
                      value: 'C02 - 08- 2- 2',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'YES'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'UPLOAD',
                    }
                  ],
                  [
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
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'EA',
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '10',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    },
                    {
                      type: 'text',
                      value: 'C02 - 08- 2- 2',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'YES'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
                    },
                    {
                      type: 'text',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'UPLOAD',
                    }
                  ]
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
                      type: 'dropdown',
                      value: [
                        'Data Entry',
                        'Bar Code entry'
                      ],
                      selectedValue: 'Data Entry',
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
                      type: 'dropdown',
                      value: [
                        'Data Entry',
                        'Bar Code entry'
                      ],
                      selectedValue: 'Data Entry',
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
                      type: 'dropdown',
                      value: [
                        'Data Entry',
                        'Bar Code entry'
                      ],
                      selectedValue: 'Data Entry',
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
                      type: 'dropdown',
                      value: [
                        'Data Entry',
                        'Bar Code entry'
                      ],
                      selectedValue: 'Data Entry',
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
          componentName: 'Attachement',
          numberOfInput: "three"
        }
      }
    }
  ]

}
