import { Component, Input } from "@angular/core";

@Component({
    selector: 'goods-issue-details',
    templateUrl: './goodsIssueDetails.component.html',
    styleUrls: ['./goodsIssueDetails.component.scss']
})
export class GoodsIssueDetails {
    @Input() data;
}