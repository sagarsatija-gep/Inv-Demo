import { Subject, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class PopUpService {
    internalStockPopUp = new Subject<boolean>();
    rfidPopUp = new Subject<boolean>();
    attachmentTable = new Subject<boolean>();
    isInternalStockErrorPopUp = false;

    rfidGlob = new Subject<any>();
    // showBarCodeIcon = new Subject<boolean>()
    showBarCodeIcon = new Subject<boolean>();// barcode header
    selectedInputForAsset = 1; //for barCode Asset

    barCodePopUpDataForAsset = new Subject<any>();

    internalTableData = {
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
                name: 'Total Weight',
                colSize: '100px'
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
                    selectedValue: 'N02-06-3-2',
                    //   tdClasses: 'text-right'
                    // classes: 'input-small rounded-sm border-secondary text-right'
                },
                {
                    type: 'text',
                    value: '920.5 LB',
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

    externalTableData = {

        tablerowClass: 'bg-white',
        colConfig: [
            {
                type: 'checkbox',
                name: '#',
                classes: 'text-left'
            },
            {
                type: 'text',
                name: 'Container Name',
                classes: 'text-left'
            },
            {
                type: 'text',
                name: 'Item No',
                classes: 'text-left'
            },
            {
                type: 'text',
                name: 'Item Name',
                classes: ' '
            },
            {
                type: 'text',
                name: 'Transfer Quantity',
                colSize: '100px',
                classes: 'text-left'
            },
            {
                type: 'text',
                name: 'UOM'
            },
            {
                type: 'text',
                name: 'From Plant',
                colSize: '100px'
            },
            {
                type: 'text',
                name: 'From Location',
                colSize: '100px'
            },
            {
                type: 'text',
                name: 'From BIN',
                colSize: '100px'
            },
            {
                type: 'text',
                name: 'To Plant',
                colSize: '100px'
            },
            {
                type: 'text',
                name: 'To Location',
                colSize: '100px'
            },
            {
                type: 'text',
                name: 'To BIN',
                colSize: '100px'
            },
            {
                type: 'text',
                name: 'RFID Tag',
                colSize: '100px'
            },
            {
                type: 'delete',
                name: '#',
                colSize: '100px'
            }
        ],
        values: [
            [
                {
                    type: 'checkbox',
                    value: 'false' 
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left' 
                },
                {
                    type: 'text',
                    value: '1025180',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Tube, Bourdon'
                },
                {
                    type: 'textbox',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: 'E69FA0FA2C6FA0FA2C6F80CB'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false'
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left'

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Lead Piping'
                },
                {
                    type: 'textbox',
                    value: '25',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: '3833333132393337'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false'
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: '1010151',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Milwaukee Tool'
                },
                {
                    type: 'textbox',
                    value: '30',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: 'E2801160600002052A5B5541'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false'
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: '2030539',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Morse Cutting Tool'
                },
                {
                    type: 'textbox',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: '3239343738313139'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false'
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left'

                },
                {
                    type: 'text',
                    value: '2044808',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'Dewalt – Saw Blade'
                },
                {
                    type: 'textbox',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: '3531313832393339'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false'
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left'

                },
                {
                    type: 'text',
                    value: '2044808',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'FILTER ELEMENT,OIL'
                },
                {
                    type: 'textbox',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: '00000000000000000A101058'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false'
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: '2044808',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'VALVE, GLOBE 3/4 BLACK HANDLE'
                },
                {
                    type: 'textbox',
                    value: '20',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'EA'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
                },
                {
                    type: 'dropdown',
                    value: [
                        'N02-06-3-2',
                        'N02-06-6-4'
                    ],
                    selectedValue: 'N02-06-3-2'
                },
                {
                    type: 'text',
                    value: '00000000000000000A101057'
                },
                {
                    type: 'delete',
                    value: ''
                }
            ],
            [
                {
                    type: 'checkbox',
                    value: 'false',
                },
                {
                    type: 'text',
                    value: 'Contaier-54432',
                    tdClasses: 'text-left',

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'CHAIN,SAFETY,WROUGHT BRASS,NO. 0 .023 GA ',
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
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
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
                    type: 'text',
                    value: '200000000000000000000132'
                },
                {
                    type: 'delete',
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
                    value: 'Contaier-54432',
                    tdClasses: 'text-left',

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'CHAIN,SAFETY,WROUGHT WEDGE',
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
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
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
                    type: 'text',
                    value: '200000000000000000000115'
                },
                {
                    type: 'delete',
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
                    value: 'Contaier-54432',
                    tdClasses: 'text-left',

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'DOUGLAS FIR,1 CMMN,1',
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
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
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
                    type: 'text',
                    value: '300833B2DDD9014000000000'
                },
                {
                    type: 'delete',
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
                    value: 'Contaier-54432',
                    tdClasses: 'text-left',

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'WIRE ROPE 1/2" (6X19) 304 SS',
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
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
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
                    type: 'text',
                    value: '200000000000000000000114'
                },
                {
                    type: 'delete',
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
                    value: 'Contaier-54432',
                    tdClasses: 'text-left',

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'CLAY,SOLID,BAG,30/60',
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
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
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
                    type: 'text',
                    value: '200000000000000000000117'
                },
                {
                    type: 'delete',
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
                    value: 'Contaier-54432',
                    tdClasses: 'text-left',

                },
                {
                    type: 'text',
                    value: '2063777',
                    tdClasses: 'text-left'
                },
                {
                    type: 'text',
                    value: 'WIRE,ANNEALED,304 SS,.063IN',
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
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'PMF-6002'
                },
                {
                    type: 'text',
                    value: 'C02-08-2-2'
                },
                {
                    type: 'dropdown',
                    value: [
                        'Shore Base – SB05',
                        'Shore Base – SB04'
                    ],
                    selectedValue: 'Shore Base – SB05'
                },
                {
                    type: 'dropdown',
                    value: [
                        '6044',
                        '6002'
                    ],
                    selectedValue: '6044'
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
                    type: 'text',
                    value: '200000000000000000000116'
                },
                {
                    type: 'delete',
                    value: '',
                }
            ]
        ]
    }

    barCodes = [];

    rfidBarCodes;

    constructor(private http: HttpClient) { }

    rfidPopUpOpen() {
        this.rfidPopUp.next(true);
    }
    setSelectedInputBoxValue(n) {
        this.selectedInputForAsset = n;
    }

    showBarcode() {
        this.showBarCodeIcon.next(true);
    }

    hideBarCode() {
        this.showBarCodeIcon.next(false);
    }

    internalStockPopupOpen() {
        this.internalStockPopUp.next(true);
    }

    showTable() {
        this.attachmentTable.next(true);
    }

    convertBarcodeScanetoArray(barcodes) {
        this.barCodes = barcodes.split("*").filter(data => data != "");
    }

    filteredExternalTableData() {
        // this.apiCallForBarCodeNumber();
        const RFC_COLUMN = this.externalTableData.colConfig.length;
        return {
            ...this.externalTableData,
            values: this.externalTableData.values.filter(data => {
                const keyValue = data[RFC_COLUMN - 2].value;
                console.log(keyValue);
                return this.barCodes.includes(keyValue);
            })
        }

    }

    apiCallForBarCodeNumber() {
        const headerDict = {
            'Content-Type': 'application/json',
            //   'Accept': 'application/js',
            //   'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            "Cache-Control": "no-cache"
        }
        const requestOptions = {
            headers: new HttpHeaders(headerDict)
        };
        Observable.interval(5000)
            .subscribe((val) => {
                console.log('called');
                this.http.get<any>('https://scmqapocrgdiag.blob.core.windows.net/testrfid/dataRFID.json', requestOptions).subscribe(data => {
                    this.rfidGlob.next(data);
                });
            });
        this.http.get<any>('https://scmqapocrgdiag.blob.core.windows.net/testrfid/dataRFID.json', requestOptions).subscribe(data => {
            this.rfidGlob.next(data);
        });
        // this.rfidGlob = this.http.get<any>('https://scmqapocrgdiag.blob.core.windows.net/testrfid/dataRFID.json', requestOptions );        
    }

    barCodePopUpDataForAssetDataChange(value) {
        this.barCodePopUpDataForAsset.next(this.selectedInputForAsset);
    }

}