import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class PopUpService {
    internalStockPopUp = new Subject<boolean>();
    attachmentTable = new Subject<boolean>();

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
            name: 'Transter Qty',
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
            //   tdClasses: 'text-right'
            },
            {
              type: 'text',
              value: 'PMF-6002',
            //   tdClasses: 'text-right'
            },
            {
              type: 'text',
              value: 'N02-06-3-2',
            //   tdClasses: 'text-right'
              // classes: 'input-small rounded-sm border-secondary text-right'
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

    internalStockPopupOpen() {
        this.internalStockPopUp.next(true);
    }

    showTable() {
        this.attachmentTable.next(true);
    }

}