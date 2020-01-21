import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'dev-table',
    templateUrl: './dev-table.component.html',
    styleUrls: ['./dev-table.component.css']
})
export class DevTable implements OnInit {
 @Input() data :any[] = [];
 
 ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     console.log(this.data);
     
 }
    get documents(): Document[] {
        return this.data.map((document, i) => ({ id: i + 1, ...document }));
          // .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }
}