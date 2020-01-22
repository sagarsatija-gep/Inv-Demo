import { Component, ViewEncapsulation } from '@angular/core';

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
    docName: "Receipt# 001005463567",
    createdDate: "11/05/2019",
    lastAccessed: "11/06/2019 7:02 PM"
  },
  {
    docName: "Receipt# 001005463234",
    createdDate: "11/04/2019",
    lastAccessed: "11/06/2019 7:02 PM"
  },
  {
    docName: "Receipt# 001005461232",
    createdDate: "11/03/2019",
    lastAccessed: "11/06/2019 7:02 PM"
  },
  {
    docName: "Receipt# 001005463675",
    createdDate: "11/02/2019",
    lastAccessed: "11/06/2019 7:01 PM"
  },
  {
    docName: "Receipt# 001005463897",
    createdDate: "11/01/2019",
    lastAccessed: "11/06/2019 7:01 PM"
  },
  {
    docName: "Receipt# 001005465668",
    createdDate: "11/12/2018",
    lastAccessed: "11/06/2019 7:01 PM"
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
  styleUrls: ['./rec-doc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecDocComponent {
  page = 1;
  pageSize = 7;
  collectionSize = DOCUMENTS.length;

  get documents(): Document[] {
    return DOCUMENTS
      .map((document, i) => ({ id: i + 1, ...document }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor() { }
}