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
    createdDate: "07/25/2020",
    lastAccessed: "07/26/2020 7:03 PM"
  },
  {
    docName: "Goods Issue# 001005463567",
    createdDate: "07/26/2020",
    lastAccessed: "07/28/2020 7:02 PM"
  },
  {
    docName: "Stock Transfer# 001005463234",
    createdDate: "07/25/2020",
    lastAccessed: "07/25/2020 7:02 PM"
  },
  {
    docName: "Receipt# 001005461232",
    createdDate: "07/28/2020",
    lastAccessed: "07/28/2020 7:02 PM"
  },
  {
    docName: "Goods Issue# 001005463675",
    createdDate: "07/27/2020",
    lastAccessed: "07/29/2020 7:01 PM"
  },
  {
    docName: "Goods Issue# 001005463897",
    createdDate: "07/25/2020",
    lastAccessed: "07/29/2020 7:01 PM"
  },
  {
    docName: "Stock Transfer# 001005465668",
    createdDate: "07/26/2020",
    lastAccessed: "07/27/2020 7:01 PM"
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