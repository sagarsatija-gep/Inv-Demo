import { Component, ViewChild } from '@angular/core';
import { ButtonRendererComponent } from '../renderer/button-renderer.component';

@Component({
  selector: 'app-rec-doc',
  templateUrl: './rec-doc.component.html',
  styleUrls: ['./rec-doc.component.css']
})
export class RecDocComponent {
  private gridApi;
  private gridColumnApi;

  frameworkComponents: any;
  @ViewChild('grid') protected grid;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowData;

  constructor() {
    this.columnDefs = [
      {
        headerName: "Document Name",
        field: "docName"
      },
      {
        headerName: "Document Type",
        field: "docType"
      },
      {
        headerName: "Created Date",
        field: "createdDate"
      },
      {
        headerName: "Last Accessed",
        field: "lastAccessed"
      }
    ];
    this.defaultColDef = {
      width: 100,
      headerCheckboxSelection: isFirstColumn,
      checkboxSelection: isFirstColumn,
      resizable: true
    };
    this.rowSelection = "multiple";
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  onDelete(e) {
    console.log(e.rowData);
  }

  private addActionsColumn(): void {
    const columnDefs = this.grid.gridOptions.columnDefs;
    columnDefs.push({
      cellRendererFramework: ButtonRendererComponent,
      headerComponentFramework: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onDelete.bind(this),
      },
      width: 50,
      minWidth: 20,
      maxWidth: 50
    });
    this.grid.api.setColumnDefs(columnDefs);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.addActionsColumn();
    params.api.sizeColumnsToFit();
    this.rowData = [
      {
        docName: "aj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      },
      {
        docName: "ajgdj",
        docType: "sadaewsd",
        createdDate: "jhgk",
        lastAccessed: "asff"
      }
    ];
  }
}

function isFirstColumn(params) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}