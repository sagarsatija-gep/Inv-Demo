import { Component } from '@angular/core';

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
  selector: 'app-rec-doc',
  templateUrl: './rec-doc.component.html',
  styleUrls: ['./rec-doc.component.css']
})
export class RecDocComponent {
  page = 1;
  pageSize = 6;
  collectionSize = DOCUMENTS.length;

  get documents(): Document[] {
    return DOCUMENTS
      .map((document, i) => ({ id: i + 1, ...document }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor() { }
}