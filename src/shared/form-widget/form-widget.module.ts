import { WidgetTable } from './component/widget-table/widgetTable.component';
import { FormsModule } from '@angular/forms';
import { WidgetAttachemant } from './component/widgetAttachement/widgetAttachement.component';
import { SubDetailsComponent } from './component/details-component/sub-details/subDetails.component';
import { DevTable } from './component/doc-table/dev-table/dev-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentTable } from './component/doc-table/docTable.component';
import { RecDocComponent } from './../../app/rec-doc/rec-doc.component';
import { DetailsComponent } from './component/details-component/details.component';
import { TryComponet } from './component/tryComponent/tryComponent';
import { WidgetHeaderComponent } from './component/widgetHeader.component';
import { WidgetFormComponent } from './container/widgetForm.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { GoodsIssueDetails } from './component/goods-issue-details/goodsIssueDetails.component';

@NgModule({
    imports: [CommonModule, 
        NgbModule, 
        MatTabsModule,
        FormsModule
     ],
    declarations: [
        WidgetFormComponent,
         WidgetHeaderComponent, 
         TryComponet, 
         DetailsComponent, 
         DocumentTable, 
         DevTable, 
         SubDetailsComponent,
         WidgetAttachemant,
         GoodsIssueDetails,
         WidgetTable
        ],
    exports:[WidgetFormComponent],
    entryComponents: [
        WidgetHeaderComponent, 
        TryComponet, 
        DetailsComponent, 
        RecDocComponent, 
        DocumentTable, 
        DevTable, 
        SubDetailsComponent,
        WidgetAttachemant,
        GoodsIssueDetails,
        WidgetTable
    ]
})
export class FormWidget {}