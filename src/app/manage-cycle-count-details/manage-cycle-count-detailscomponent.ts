import { Component, OnInit ,ViewChild, ViewEncapsulation} from '@angular/core';
import { pickListData } from '../../../data';
import { DatePipe } from '@angular/common';
import { GroupService, SortService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-manage-cycle-count-details',
  templateUrl: './manage-cycle-count-details.component.html',
  styleUrls: ['./manage-cycle-count-details.component.css']
})
export class ManageCycleCountDetailsComponent implements OnInit {

  constructor() { }

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
                  selectedValue:'Issue For Cost Center',
                  editable: true,
                }
              ]
            }
          ]
        }
      }
    }
]

  opened:boolean=true;
  public data: Object[];
  public groupOptions: Object;
  public pageSettings: Object;
  public refresh: Boolean;
  @ViewChild('grid')
  public grid: GridComponent;
  @ViewChild('alertDialog')
  public alertDialog: DialogComponent;
  public alertHeader: string = 'Grouping';
  public hidden: Boolean = false;
  public target: string = '.control-section';
  public alertWidth: string = '300px';
  public alertContent: string = 'Grouping is disabled for this column';
  public showCloseIcon: Boolean = false;
  public animationSettings: Object = { effect: 'None' };
  public alertDlgBtnClick = () => {
      this.alertDialog.hide();
  }
  public alertDlgButtons: Object[] = [{ click: this.alertDlgBtnClick.bind(this), buttonModel: { content: 'OK', isPrimary: true } }];
  ngOnInit(): void {
      this.data = pickListData;
      
      this.groupOptions = { showGroupedColumn: false, columns: ['Reservation'] };
      this.pageSettings = { pageCount: 5 };
  }
  dataBound() {
      if(this.refresh){
          this.grid.groupColumn('Reservation');
          this.refresh =false;
      }
  }
  load() {
      this.refresh = (<any>this.grid).refreshing;
  }
  created() {
      this.grid.on("columnDragStart", this.columnDragStart, this);
  }
  public columnDragStart(args: any) {
      if(args.column.field === "Mainfieldsofinvention"){
          this.alertDialog.show();
     }
  }

  
  // public data: Object[];
  // public filterSettings: Object;
  // ngOnInit() {
    // this.filterSettings = { type: 'Menu' };
    // this.data = [
    //   { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, ShipCountry: 'France' },
    //   { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, ShipCountry: ' Germany' },
    //   { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, ShipCountry: 'Brazil' },
    //   { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, ShipCountry: 'France' },
    //   { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3, ShipCountry: 'Belgium' },
    //   { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, ShipCountry: 'Brazil' },
    //   { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, ShipCountry: 'Switzerland' },
    //   { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, ShipCountry: 'Switzerland' },
    //   { OrderID: 10256, CustomerID: 'SUPRD', Freight: 13.97, ShipCountry: 'Brazil' },
    //   { OrderID: 10257, CustomerID: 'WELLI', Freight: 14.23, ShipCountry: 'Venezuela' },
    //   { OrderID: 10258, CustomerID: 'VICTE', Freight: 18.33, ShipCountry: 'France' },
    //   { OrderID: 10259, CustomerID: 'WELLI', Freight: 28.13, ShipCountry: 'Brazil' },
    //   { OrderID: 10260, CustomerID: 'CHOPS', Freight: 48.34, ShipCountry: 'Switzerland'  },
    //   { OrderID: 10261, CustomerID: 'SUPRD', Freight: 32.73, ShipCountry: ' Germany' },
    //   { OrderID: 10262, CustomerID: 'TOMSP', Freight: 12.31, ShipCountry: 'Switzerland' },
    //   { OrderID: 10263, CustomerID: 'VICTE', Freight: 23.77, ShipCountry: 'Brazil' },
    //   { OrderID: 10264, CustomerID: 'SUPRD', Freight: 43.47, ShipCountry: 'Venezuela' },
    //   { OrderID: 10265, CustomerID: 'CHOPS', Freight: 53.37, ShipCountry: 'Belgium' },
    // ];
  // }





}
