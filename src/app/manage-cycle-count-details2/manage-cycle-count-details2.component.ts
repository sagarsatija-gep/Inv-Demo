import { Component, OnInit ,ViewChild, ViewEncapsulation, OnDestroy} from '@angular/core';
import { cycleCount2Data } from '../../../data';
import { DatePipe } from '@angular/common';
import { GroupService, SortService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { PopUpService } from '../../shared/form-widget/service/popUp.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { barcodePopup } from '../../shared/popUpComponent/barcodePopup/barcodePopup.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-manage-cycle-count-details2',
  templateUrl: './manage-cycle-count-details2.component.html',
  styleUrls: ['./manage-cycle-count-details2.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ManageCycleCountDetails2Component implements OnInit,OnDestroy {

  constructor( private popUpService:PopUpService, public modalService: NgbModal) { }
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
              values: 'CC-002730',
            },
            {
              type:'text',
              name: 'Type',
              values: 'Unplanned',
            },{
              type:'text',
              name: 'Company Code',
              values: 'AM33',
            },
            {
              type:'text',
              name: 'Plant',
              values: 'El-Segundo Refinery',
            },
            {
              type:'text',
              name: 'Name',
              values: 'System Generated – Count for Bin - D-02-A',
            },
            {
              type: 'text',
              name:'Warehouse',
              values:'ISOMAX'
            },
            {
              type: 'text',
              name: 'Scheduled Date',
              values: '02/10/2020',
            },
            {
              type: 'text',
              name: 'Assignee',
              values: 'Emily Ross',
            },
            
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
  selectionSettings : object
  barCodeSubscriber: Subscription;
  public alertDlgBtnClick = () => {
      this.alertDialog.hide();
  }
  public alertDlgButtons: Object[] = [{ click: this.alertDlgBtnClick.bind(this), buttonModel: { content: 'OK', isPrimary: true } }];
  ngOnInit(): void {
    
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
      this.groupOptions = { showGroupedColumn: false, columns: ['Reservation'] };
      this.pageSettings = { pageCount: 5 };
      this.barCodeSubscriber = this.popUpService.barCodePopUpDataForAsset.subscribe(()=>{
        this.data = cycleCount2Data;
      })
      this.selectionSettings = {persistSelection: true, type: "Multiple", checkboxOnly: true };
  }
  ngOnDestroy(){
    this.barCodeSubscriber.unsubscribe()
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

  barCodePopUp(){
    const modalRef = this.modalService.open(barcodePopup, { size: 'lg' });
        modalRef.componentInstance.name = 'World';
       
  }


}
