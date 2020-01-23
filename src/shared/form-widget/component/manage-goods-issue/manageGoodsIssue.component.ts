import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'manage-goods-issue',
    templateUrl: './manageGoodsIssue.component.html',
    styleUrls: ['./manageGoodsIssue.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ManageGoodsIssue implements OnInit {
    @Input() data;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        debugger;
        console.log(this.data);
        
    }
}