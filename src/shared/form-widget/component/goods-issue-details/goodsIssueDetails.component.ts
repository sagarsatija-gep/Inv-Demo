import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'goods-issue-details',
    templateUrl: './goodsIssueDetails.component.html',
    styleUrls: ['./goodsIssueDetails.component.scss']
})
export class GoodsIssueDetails implements OnInit {
    @Input() data;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        debugger;
        console.log(this.data);
        
    }
}