import { cycleCountDataManage, overviewDataManage } from './../../../data';
import { Router } from '@angular/router';
import { Component, OnInit ,ViewChild, ViewEncapsulation} from '@angular/core';
import { cycleCountData } from '../../../data';
import { DatePipe } from '@angular/common';
import { GroupService, SortService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';


@Component({
  selector: 'app-manage-cycle-count-details',
  templateUrl: './manage-cycle-count-details.component.html',
  styleUrls: ['./manage-cycle-count-details.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ManageCycleCountDetailsComponent implements OnInit {

  constructor(private route: Router) { }
  public editSettings: Object;
  pipe = new DatePipe('en-US');
  widgetData = [
    {
      'HeaderData': {
        name: 'Basic Details',
        isOpen: true,
        collapsible: false,
        data: {
          componentName: 'details',
          isSubDetails: false,
          data: [
            {
              type:'text',
              name: 'Cycle Count Number',
              values: 'CC-002978',
            },
            {
              type:'text',
              name: 'Type',
              values: 'Planned',
            },{
              type:'text',
              name: 'Company Code',
              values: 'AM33',
            },
            {
              type:'text',
              name: 'Plant',
              values: 'Calgary, CA',
            },
            {
              type:'text',
              name: 'Name',
              values: 'Count Tuthill Pump FR700V',
            },
            {
              type: 'text',
              name:'Warehouse',
              values:'ISOMAX'
            },
            {
              type: 'text',
              name: 'Scheduled Date',
              values: '02/04/2021',
            },
            {
              type: 'text',
              name: 'Assignee',
              values: 'Emily Ross',
            },
            {
              type:'',
              name:'Reviewer Name',
              values:'Amanda'
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
  public selectionSettings:object
  public alertDlgBtnClick = () => {
      this.alertDialog.hide();
  }
  public alertDlgButtons: Object[] = [{ click: this.alertDlgBtnClick.bind(this), buttonModel: { content: 'OK', isPrimary: true } }];
  url;
  ngOnInit(): void {

    this.url = this.route.url;
        this.url = this.url.split('/')[1];
        // this.userUrl = this.url;

      this.data = cycleCountData;
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
      this.groupOptions = { showGroupedColumn: false, columns: ['Reservation'] };
      this.pageSettings = { pageCount: 5 };
      this.selectionSettings = {persistSelection: true, type: "Multiple", checkboxOnly: true };

      if(this.url == 'cycleCountDetails') {
        this.data = cycleCountDataManage;
      }
      if( this.url == 'cycleOverviewDetails') {
        this.data = overviewDataManage  ;
      }

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

  onCountedClick() {
    if(this.url == 'cycleCountDetails') {
      this.route.navigate(['/CycleCountRequests'])
    } else {
      this.route.navigate(['/manageCycleCountRequests'])
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
