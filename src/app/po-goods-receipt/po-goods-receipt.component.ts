import { SuccessPopUp } from './../../shared/popUpComponent/successPopUp/successPopUP.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-po-goods-receipt',
  templateUrl: './po-goods-receipt.component.html',
  styleUrls: ['./po-goods-receipt.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PoGoodsReceiptComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

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
        route:"poGoodsReceipt",
        isOpen: true,
        data: {
          componentName: 'tabComponent',
          route: "poGoodsReceipt",
          haveButton: false,
          data: [
            {
              tabName: 'LINES',
              tabcomponent: 'widgetTable',
              route:'PoGoodsReceiptComponent',
              tabData: {
                route:"poGoodsReceipt",
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
                    colSize: '100px',

                  },
                  {
                    type: 'text',
                    name: 'Received Quantity',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Accepted Quantity',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Storage Location',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Storage Bin',
                    colSize: '100px',

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
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Goods Receipent',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Unloading Point',
                    colSize: '100px',
                    classes: 'text-left'
                  },
                  {
                    type: 'text',
                    name: 'Attachments',
                    colSize: '100px',
                    classes: 'text-left'
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
                      value: '138-7576:Bracket Assembly',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'Each',
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
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'C02 - 08- 2- 2',
                        'C03 - 06- 2- 2',
                        'S02 - 03- 2- 4',
                        'C02 - 08- 2- 4'
                      ],
                      selectedValue: 'C02 - 08- 2- 2',
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
                    },
                    {
                      type: 'button',
                      value: 'UPLOAD',
                      show: false,
                      styles: { 'width': '85px', 'height': '30px', 'padding': '0px', 'margin': '-3px' }
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
                      value: 'Electric Tool 48-20-5030',
                      tdClasses: 'text-left'
                    },
                    {
                      type: 'text',
                      value: 'Each',
                    },
                    {
                      type: 'textbox',
                      value: '50',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '50',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'C02 - 08- 2- 2',
                        'C03 - 06- 2- 2',
                        'S02 - 03- 2- 4',
                        'C02 - 08- 2- 4'
                      ],
                      selectedValue: 'C03 - 06- 2- 2',
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
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
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
                    },
                    {
                      type: 'button',
                      value: 'UPLOAD',
                      show: false,
                      styles: { 'width': '85px', 'height': '30px', 'padding': '0px', 'margin': '-3px' }
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
                      value: 'Each',
                    },
                    {
                      type: 'textbox',
                      value: '100',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '100',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    }
                    , {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'C02 - 08- 2- 2',
                        'C03 - 06- 2- 2',
                        'S02 - 03- 2- 4',
                        'C02 - 08- 2- 4'
                      ],
                      selectedValue: 'S02 - 03- 2- 4',
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
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'YES'
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
                    },
                    {
                      type: 'button',
                      value: 'UPLOAD',
                      show: false,
                      styles: { 'width': '85px', 'height': '30px', 'padding': '0px', 'margin': '-3px' }
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
                      value: 'Piece',
                    },
                    {
                      type: 'textbox',
                      value: '80',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'textbox',
                      value: '80',
                      classes: 'rounded-sm border-secondary input-small text-right'
                    },
                    {
                      type: 'text',
                      value: 'PMF - 6002',
                    },
                    {
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'C02 - 08- 2- 2',
                        'C03 - 06- 2- 2',
                        'S02 - 03- 2- 4',
                        'C02 - 08- 2- 4'
                      ],
                      selectedValue: 'S02 - 03- 2- 4',
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
                      type: 'dropdown',
                      classes: 'rounded-sm border-secondary input-large',
                      value: [
                        'YES',
                        'NO'
                      ],
                      selectedValue: 'NO'
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
                    },
                    {
                      type: 'button',
                      value: 'UPLOAD',
                      show: false,
                      styles: { 'width': '85px', 'height': '30px', 'padding': '0px', 'margin': '-3px' }
                    }
                  ]
                ]
              }
            },
            {
              tabName: 'ASSET MANAGEMENT',
              tabcomponent: 'widgetTable',
              barcodeButton: true,
              tabData: {
                colConfig: [{
                  type: 'checkbox',
                  name: 'Line Select',
                  styles: {
                    'width': '2%'
                  },
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
                  [{
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    value1:'628736',
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
                  [{
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    value1:'428736',
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
                  [{
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'686736',
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
                  [{
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'628776',
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
                  [{
                    type: 'checkbox',
                    value: 'false',
                  },
                  {
                    type: 'text',
                    value: '5',
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'746736',
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
                  [{
                    type: 'checkbox',
                    value: 'false',
                  },
                  {
                    type: 'text',
                    value: '6',
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'628746',
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
                  [{
                    type: 'checkbox',
                    value: 'false',
                  },
                  {
                    type: 'text',
                    value: '7',
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'628744',
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
                  [{
                    type: 'checkbox',
                    value: 'false',
                  },
                  {
                    type: 'text',
                    value: '8',
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'628722',
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
                  [{
                    type: 'checkbox',
                    value: 'false',
                  },
                  {
                    type: 'text',
                    value: '9',
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',
                    
                    value1:'625536',
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
                  [{
                    type: 'checkbox',
                    value: 'false',
                  },
                  {
                    type: 'text',
                    value: '10',
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
                    value: 'Each',
                  },
    
                  {
                    type: 'textbox',
                    value: '',  
                    value1:'945278',
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

  onFinalizeClick() {
    this.successPopUp();
  }

  successPopUp() {
    const modalRef = this.modalService.open(SuccessPopUp, { size: 'lg' });
    modalRef.componentInstance.name = 'Receipt is Finalized';

  }


}
