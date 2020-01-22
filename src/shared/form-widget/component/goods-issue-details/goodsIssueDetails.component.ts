import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'goods-issue-details',
    templateUrl: './goodsIssueDetails.component.html',
    styleUrls: ['./goodsIssueDetails.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GoodsIssueDetails implements OnInit {
    @Input() data;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.data);
        
    }
}