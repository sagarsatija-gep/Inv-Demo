import { FormWidget } from './form-widget/form-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ChartTableComponent } from './chart-table/chart-table.component';
import { InventoryMapDashboardComponent } from './inventory-map-dashboard/inventory-map-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        ChartTableComponent,
        InventoryMapDashboardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        FormWidget,
        NgxChartsModule
    ],
    providers:[],
    exports: [
        ChartTableComponent,
        InventoryMapDashboardComponent
    ]
}) 
export class Shared {}