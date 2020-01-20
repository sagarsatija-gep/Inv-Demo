import { DetailsComponent } from './component/details-component/details.component';
import { TryComponet } from './component/tryComponent/tryComponent';
import { WidgetHeaderComponent } from './component/widgetHeader.component';
import { WidgetFormComponent } from './container/widgetForm.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [CommonModule, ],
    declarations: [WidgetFormComponent, WidgetHeaderComponent, TryComponet, DetailsComponent],
    exports:[WidgetFormComponent],
    entryComponents: [WidgetHeaderComponent, TryComponet, DetailsComponent]
})
export class FormWidget {}