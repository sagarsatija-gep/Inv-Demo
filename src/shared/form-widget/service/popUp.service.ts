import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class PopUpService {
    internalStockPopUp = new Subject<boolean>();
    attachmentTable = new Subject<boolean>();
    isInternalStockErrorPopUp = false;

    internalTableData =  {

        tablerowClass: 'bg-white',
        colConfig: [
        //     {
        //     type: 'checkbox',
        //     name: 'Reservation #',
        //     classes: 'text-left',
        //     // styles: {'width': '%'},
        //   },
          {
            type: 'text',
            name: 'Item No',
            // colSize: '100px',
            classes: 'text-left',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'Item Name',
            // colSize: '100px',
            classes: ' ',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'Transfer Quantity',
            colSize: '100px',
            // styles: {'background-color': 'rebeccapurple'},
            classes: 'text-left',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'UOM',
            // colSize: '100px',
            // styles: {'background-color': 'rebeccapurple'},
            // classes: 'text-left',
  
          },
          {
            type: 'text',
            name: 'From Location',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'From BIN',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'To Location',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'To BIN',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: '',
            // styles: {'width': '8%'},
          }
        ],
        values: [
          [
            //   {
            //   type: 'checkbox',
            //   value: 'false',
            //   tdClasses: 'text-left'
            // },
            {
              type: 'text',
              value: '2063777',
              tdClasses: 'text-left'
            },
            {
              type: 'text',
              value: 'Lead Piping',
            },
            {
              type: 'textbox',
              value: '25',
              tdClasses: 'text-left'
            },
            {
              type: 'text',
              value: 'EA',
            },
            {
              type: 'text',
              value: 'PMF-6002',
            },
            {
              type: 'text',
              value: 'C02-08-2-2',
            //   tdClasses: 'text-right'
            },
            {
              type: 'text',
              value: 'PMF-6002',
            //   tdClasses: 'text-right'
            },
            {
            //   type: 'text',
            //   value: 'N02-06-3-2',
              type: 'dropdown',
                value: [
                'N02-06-3-2',
                'N02-06-6-4',
                'Y2-4-2-5'
                 ],
                selectedValue:'N02-06-3-2',
            //   tdClasses: 'text-right'
              // classes: 'input-small rounded-sm border-secondary text-right'
            },
            {
                type: 'delete',
                value: '',
            },
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

    asnTableData = {

        tablerowClass: 'bg-white',
        colConfig: [{
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
        ],
        values: [
          [{
              type: 'checkbox',
              value: 'false',
              tdClasses: 'text-left'
            },
            {
              type: 'hiperlink',
              value: 'Bill Of Lading.pdf',
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

    externalTableData =  {

        tablerowClass: 'bg-white',
        colConfig: [
        //     {
        //     type: 'checkbox',
        //     name: 'Reservation #',
        //     classes: 'text-left',
        //     // styles: {'width': '%'},
        //   },
          {
            type: 'text',
            name: 'Item No',
            // colSize: '100px',
            classes: 'text-left',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'Item Name',
            // colSize: '100px',
            classes: ' ',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'Transfer Quantity',
            colSize: '100px',
            // styles: {'background-color': 'rebeccapurple'},
            classes: 'text-left',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'UOM',
            // colSize: '100px',
            // styles: {'background-color': 'rebeccapurple'},
            // classes: 'text-left',
  
          },
          {
            type: 'text',
            name: 'From Location',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'From BIN',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'To Location',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: 'To BIN',
            colSize: '100px',
            // styles: {'width': '8%'},
          },
          {
            type: 'text',
            name: '',
            colSize: '100px',
            // styles: {'width': '8%'},
          }
        ],
        values: [
            [{
                    type: 'text',
                    value: '1025180',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Tube, Bourdon',
                },
                {
                    type: 'text',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2',
                },
                {
                    type: 'delete',
                    value: '',
                },
            ],
            [{
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Lead Piping',
                },
                {
                    type: 'text',
                    value: '25',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2',
                },
                {
                    type: 'delete',
                    value: '',
                },
            ],
            [{
                    type: 'text',
                    value: '1010151',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Milwaukee Tool',
                },
                {
                    type: 'text',
                    value: '30',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2',
                },
                {
                    type: 'delete',
                    value: '',
                },
            ],
            [{
                    type: 'text',
                    value: '2030539',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Morse Cutting Tool',
                },
                {
                    type: 'text',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2',
                },
                {
                    type: 'delete',
                    value: '',
                },
            ],
            [{
                    type: 'text',
                    value: '2044808',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Dewalt – Saw Blade',
                },
                {
                    type: 'text',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2',
                },
                {
                    type: 'text',
                    value: 'PMF-6002',
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2',
                },
                {
                    type: 'delete',
                    value: '',
                },
            ]
        
        ]
      }

    internalStockPopupOpen() {
        this.internalStockPopUp.next(true);
    }

    showTable() {
        this.attachmentTable.next(true);
    }

}