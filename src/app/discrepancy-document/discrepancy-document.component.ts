import { Component, OnInit } from '@angular/core';

interface discrepancyDocs {
  line: string;
  item: string;
  itemDesc: string;
  qty: string;
  uom: string;
  comments: string;
  attachment: string;
}

const discrepancyDocuments: discrepancyDocs[] = [
  {
  line: "string",
  item: "string",
  itemDesc: "string",
  qty: "string",
  uom: "string",
  comments: "string",
  attachment: "string",
  }
]
@Component({
  selector: 'app-discrepancy-document',
  templateUrl: './discrepancy-document.component.html',
  styleUrls: ['./discrepancy-document.component.css']
})

export class DiscrepancyDocumentComponent implements OnInit {
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

  DiscData = [
    {
      type: 'text',
      name: 'Discrepancy Number',
      value: 'MD000003',
      editable: true,
    },
    {
      type: 'text',
      name: 'Discrepancy Name',
      value: 'Document Description',
      editable: true,
    },
    {
      type: 'text',
      name: 'Create By',
      value: 'Jeff',
      editable: true,
    },
    {
      type: 'text',
      name: 'Create Date',
      value: '03-05-2020',
      editable: true,
    },
    {
      type: 'text',
      name: 'Posting Date',
      value: '03-08-2020',
      editable: true,
    },
    {
      type: 'text',
      name: 'Seller Name',
      value: 'Emily',
      editable: true,
    },
    {
      type: 'text',
      name: 'PO Number',
      value: 'PO000001',
      editable: true,
    },
    {
      type: 'text',
      name: 'GR Number',
      value: 'GR001',
      editable: true,
    },
    {
      type: 'text',
      name: 'Approver',
      value: 'Jack',
      editable: true,
    },
    {
      type: 'text',
      name: 'Comments',
      value: 'Draft',
      editable: true,
    }
  ]

  // widgetData = [
  //   {
  //     'HeaderData': {
  //       name: 'Basic Details',
  //       isOpen: true,
  //       collapsible: false,
  //       status: 'Draft',
  //       classes: 'text-secondary',
  //       data: {
  //         componentName: 'goodsIssueDetails',
  //         isSubDetails: false,//for subDetails components
  //         data: [
  //           {
  //             editable: true,
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Discrepancy Number',
  //                 value: 'MD000003',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             classes: 'bg-gray',
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Discrepancy Name',
  //                 value: 'Document Description',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             classes: 'bg-gray',
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Create By',
  //                 value: 'Jeff',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             classes: 'bg-gray',
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Create Date',
  //                 value: '5-3-20',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             classes: 'bg-gray',
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Posting Date',
  //                 value: '',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             classes: 'bg-gray',
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Seller Name',
  //                 value: ' ',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             classes: 'bg-gray',
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'PO Number',
  //                 value: 'PO000001',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'GR Number',
  //                 value: 'GR001',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Approver',
  //                 value: 'Jack',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: true,
  //             data: [
  //               {
  //                 type: 'textBox',
  //                 name: 'Comments',
  //                 value: 'Draft',
  //                 editable: true,
  //               }
  //             ]
  //           },
  //           {
  //             editable: false,
  //             data: [
  //               {
  //                 type: 'attachfiles'
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     }
  //   }
  // ]
}
