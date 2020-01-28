import { Component } from '@angular/core';

interface LineItem {
  id?: number;
  itemNumber: string;
  description: string;
  uom: string;
  poQuantity: number;
  receivedQuantity: number;
  isChecked: boolean;
}

const LINEITEMS: LineItem[] = [
  {
    itemNumber: "3420112",
    description: "138-7576: BRACKET ASSEMBLY",
    uom: "Each",
    poQuantity: 77,
    receivedQuantity: 20,
    isChecked: false
  },
  {
    itemNumber: "5462411",
    description: "Morse Cutting Tools 82062",
    uom: "Each",
    poQuantity: 200,
    receivedQuantity: 50,
    isChecked: true
  },
  {
    itemNumber: "5000206",
    description: "Spocket & Gear",
    uom: "Each",
    poQuantity: 20,
    receivedQuantity: 20,
    isChecked: false
  },
  {
    itemNumber: "2030473",
    description: "Gear Air Moter",
    uom: "Each",
    poQuantity: 20,
    receivedQuantity: 20,
    isChecked: false
  }
];

@Component({
  selector: 'app-scanned-document-line-items',
  templateUrl: './scanned-document-line-items.component.html',
  styleUrls: ['./scanned-document-line-items.component.css']
})
export class ScannedDocumentLineItemsComponent {
  get lineItems(): LineItem[] {
    return LINEITEMS
      .map((lineItem, i) => ({ id: i + 1, ...lineItem }));
  }
  constructor() { }
}