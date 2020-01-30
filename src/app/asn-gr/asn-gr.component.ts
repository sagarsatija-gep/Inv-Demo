import {
  Component,
  OnInit
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessPopUp } from '../../shared/popUpComponent/successPopUp/successPopUP.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-asn-gr',
  templateUrl: './asn-gr.component.html',
  styleUrls: ['./asn-gr.component.css']
})
export class AsnGrComponent implements OnInit {
  printContents: any
  originalContents: any
  constructor(public modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.name = 'World';
  }

  print() {

    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=1920px,width=1080px');
    popupWin.document.open();
    popupWin.document.write(`
<html>
  <head>
    <style>
    body{  width: 99%;}
      label { font-weight: 400;
              font-size: 13px;
              padding: 2px;
              margin-bottom: 5px;
            }
      table, td, th {
             border: 1px solid silver;
              }
              table td {
             font-size: 13px;
              }

               table th {
             font-size: 13px;
              }
        table {
              border-collapse: collapse;
              width: 98%;
              }
          th {
              height: 26px;
              }
    </style>
  </head>
<body onload="window.print();window.close()">${printContents}</body>
</html>`);
    popupWin.document.close();

  }

  printRfid() {

    let printContents, popupWin;
    printContents = document.getElementById('print-section-rfid').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=1920px,width=1080px');
    popupWin.document.open();
    popupWin.document.write(`
<html>
  <head>
    <style>
    body{  width: 99%;}
      label { font-weight: 400;
              font-size: 13px;
              padding: 2px;
              margin-bottom: 5px;
            }
      table, td, th {
             border: 1px solid silver;
              }
              table td {
             font-size: 13px;
              }

               table th {
             font-size: 13px;
              }
        table {
              border-collapse: collapse;
              width: 98%;
              }
          th {
              height: 26px;
              }
    </style>
  </head>
<body onload="window.print();window.close()">${printContents}</body>
</html>`);
    popupWin.document.close();

  }




  ngOnInit() { }
  asnGrData = [{
    'HeaderData': {
      name: 'Basic Details',
      isOpen: true,

      collapsible: true,
      data: {
        componentName: 'details',
        isSubDetails: false,
        data: [{
          type: 'textbox',
          name: 'Receipt Name',
          values: 'Receipt for 6001068586806',
        },
        {
          type: 'text',
          name: 'Receipt Number',
          values: '2019000172',
        },
        {
          type: 'text',
          name: 'ASN Number',
          values: '6001068586806',
        },
        {
          type: 'text',
          name: 'Order Number',
          values: '8585002483034',
        },
        {
          type: 'text',
          name: 'Supplier Name',
          values: 'Motion Industries Inc',
        },
        {
          type: 'text',
          name: 'Status',
          values: 'Draft',
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
        route: "asnGoodsReceipt",
        haveButton: false,
        data: [
          {
            tabName: 'LINES',
            tabcomponent: 'widgetTable',
            tabData: {
              tablerowClass: 'bg-white',
              colConfig: [{
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
                name: 'QA Result',
                colSize: '100px',
                classes: 'text-left'
              },
              {
                type: 'text',
                name: 'Goods Recipient',
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
                [{
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
                    'NO',
                  ],
                  selectedValue: 'YES',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'textbox',
                  value: '',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'Pass',
                    'Fail'
                  ],
                  selectedValue: 'Pass',
                },
                {
                  type: 'textbox',
                  value: '',
                },
                {
                  type: 'textbox',
                  value: '',
                }, {
                  type: 'button',
                  value: 'UPLOAD',
                  styles: {
                    'width': '85px',
                    'height': '30px',
                    'padding': '0px',
                    'margin': '-3px'
                  }
                }
                ],
                [{
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
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'textbox',
                  value: 'Repairable',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'Pass',
                    'Fail'
                  ],
                  selectedValue: 'Pass',
                },
                {
                  type: 'textbox',
                  value: '',
                },
                {
                  type: 'textbox',
                  value: '',
                }, {
                  type: 'button',
                  value: 'UPLOAD',
                  styles: {
                    'width': '85px',
                    'height': '30px',
                    'padding': '0px',
                    'margin': '-3px'
                  }
                }
                ],
                [{
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
                }, {
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
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'YES',
                },
                {
                  type: 'textbox',
                  value: '',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'Pass',
                    'Fail'
                  ],
                  selectedValue: 'Pass',
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
                  styles: {
                    'width': '85px',
                    'height': '30px',
                    'padding': '0px',
                    'margin': '-3px'
                  }
                }
                ],
                [{
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
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'YES',
                    'NO',
                  ],
                  selectedValue: 'NO',
                },
                {
                  type: 'textbox',
                  value: '',
                },
                {
                  type: 'dropdown',
                  classes: 'rounded-sm border-secondary input-large',
                  value: [
                    'Pass',
                    'Fail'
                  ],
                  selectedValue: 'Pass',
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
                  styles: {
                    'width': '85px',
                    'height': '30px',
                    'padding': '0px',
                    'margin': '-3px'
                  }
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
        numberOfInput: "three",
        page: 'asn'
      }
    }
  }
  ]

  successPopUp() {
    const modalRef = this.modalService.open(SuccessPopUp, { size: 'lg' });
    modalRef.componentInstance.name = 'Receipt is finalized';

  }

  onFinalizeClick() {
    this.successPopUp();
  }

}
