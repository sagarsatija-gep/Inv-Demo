import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'cycle-count',
    templateUrl: './cycle-count-overview.component.html',
    styleUrls: ['./cycle-count-overview.component.scss']
})
export class CycleCountComponent implements OnInit {

    showFilter = false;
    widgetData = [
        {
          'HeaderData': {
            name: 'Line Details',
            isOpen: true,
            collapsible: true,
            data: {
              componentName: 'overviewTable',
              numberOfInput: 'one',
              page: 'externalStockTaransfer'
            }
          }
        }
    ];
    slide = true;
    filterWidget = [
        {
            'HeaderData': {
              name: '',
              isOpen: true,
              collapsible: true,
              data: {
                componentName: 'goodsIssueDetails',
                isSubDetails: false,
                data: [
                  {
                    editable: true,
                    data: [
                      {
                        type: 'textBox',
                        name: 'Plant',
                        value: 'DRSL',
                        editable: true,
                      }
                    ]
                  },
                  {
                    editable: true,
                    // classes: 'bg-gray',
                    data: [
                      {
                        type: 'textBox',
                        name: 'Storage Location',
                        value: '',
                        editable: true,
                      }
                    ]
                  },
                  {
                    editable: true,
                    // classes: 'bg-gray',
                    data: [
                      {
                        type: 'textBox',
                        name: 'Storage Bin',
                        value: '',
                        editable: true,
                      }
                    ]
                  },
                  {
                    editable: true,
                    // classes: 'bg-gray',
                    data: [
                      {
                        type: 'textBox',
                        name: 'Item Number',
                        value: '',
                        editable: true,
                      }
                    ]
                  },
                  {
                    editable: true,
                    // classes: 'bg-gray',
                    data: [
                      {
                        type: 'textBox',
                        name: 'Storage Bin',
                        value: '',
                        editable: true,
                      }
                    ]
                  }
                ]
              }
            }
          }
    ]
    ngOnInit(){}

    openFilter() {
        this.showFilter = !this.showFilter;
    }

}