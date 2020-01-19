import { Component, ViewChild } from '@angular/core';
import { ButtonRendererComponent } from '../renderer/button-renderer.component';
import { ViewEncapsulation } from '@angular/core';

interface Document {
  id?: number;
  docName: string;
  createdDate: string;
  lastAccessed: string;
}

const DOCUMENTS: Document[] = [
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  },
  {
    docName: "Receipt# 001005463468",
    createdDate: "11/06/2019",
    lastAccessed: "11/06/2019 7:03 PM"
  }
];

@Component({
  encapsulation: ViewEncapsulation.None,
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
      minWidth: 50,
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
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      },
      {
        docName: "Receipt# 001005463468",
        createdDate: "11/06/2019",
        lastAccessed: "11/06/2019 7:03 PM"
      }
    ];
  }

  page = 1;
  pageSize = 6;
  collectionSize = DOCUMENTS.length;

  get documents(): Document[] {
    return DOCUMENTS
      .map((document, i) => ({ id: i + 1, ...document }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}

function isFirstColumn(params) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}