import { Component, OnInit } from '@angular/core';

interface discrepancyDocs {
  documentId: string;
  documentDesc: string;
  creationDate: string;
  poNumber: string;
  GRNumber: string;
  createdBy: string;
  approver: string;
  documentStatus: string;
}

const discrepancyDocuments: discrepancyDocs[] = [
  {
    documentId: "MD000001",
    documentDesc: "Document Description",
    creationDate: "5-3-20",
    poNumber: "PO000001",
    GRNumber: "GR001",
    createdBy: "Jeff",
    approver: "Jack",
    documentStatus: "draft"
  },
  {
    documentId: "MD000002",
    documentDesc: "Document Description",
    creationDate: "5-3-20",
    poNumber: "PO000002",
    GRNumber: "GR002",
    createdBy: "Bill",
    approver: "Jack",
    documentStatus: "sent for approval"
  },
  {
    documentId: "MD000003",
    documentDesc: "Document Description",
    creationDate: "5-3-20",
    poNumber: "PO000003",
    GRNumber: "GR003",
    createdBy: "Mark",
    approver: "Jack",
    documentStatus: "approved"
  }
  // {
  //   documentId: "",
  //   documentDesc: "",
  //   creationDate: "",
  //   poNumber: "",
  //   GRNumber: "",
  //   createdBy: "",
  //   approver: "",
  //   documentStatus: ""
  // }
]

@Component({
  selector: 'app-material-discrepancy',
  templateUrl: './material-discrepancy.component.html',
  styleUrls: ['./material-discrepancy.component.css']
})
export class MaterialDiscrepancyComponent implements OnInit {

  page = 1;
  pageSize = 7;
  collectionSize = discrepancyDocuments.length;

  get discrepancyDocs(): discrepancyDocs[] {
    return discrepancyDocuments
      .map((packingSlip, i) => ({ id: i + 1, ...packingSlip }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor() { }

  ngOnInit() {
  }

}
