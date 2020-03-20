import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-manage-material-requests',
  templateUrl: './manage-material-requests.component.html',
  styleUrls: ['./manage-material-requests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageMaterialRequestsComponent implements OnInit {
  public isCollapsed = true;
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
    this.data = [
      {
        "materialRequest": "12345",
        "materialRequestName": "Request 1",
        "documentDate": "02/202/2020",
        "postedDate": "02/202/2020",
        "status": "In Progress"
      }, {
        "materialRequest": "12346",
        "materialRequestName": "Request 2",
        "documentDate": "02/202/2020",
        "postedDate": "02/202/2020",
        "status": "Completed"
      },
      {
        "materialRequest": "12347",
        "materialRequestName": "Request 3",
        "documentDate": "02/202/2020",
        "postedDate": "02/202/2020",
        "status": "Completed"
      }
    ];
    this.pageSettings = { pageCount: 5 };
  }

  dataBound() {
    if (this.refresh) {
      this.grid.groupColumn('Reservation');
      this.refresh = false;
    }
  }

  load() {
    this.refresh = (<any>this.grid).refreshing;
  }

  created() {
    this.grid.on("columnDragStart", this.columnDragStart, this);
  }

  public columnDragStart(args: any) {
    if (args.column.field === "Mainfieldsofinvention") {
      this.alertDialog.show();
    }
  }

  constructor() { }
}
