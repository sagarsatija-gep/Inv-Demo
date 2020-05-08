import { FormWidget } from './form-widget/form-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ChartTableComponent } from './chart-table/chart-table.component';

@NgModule({
    declarations:[
        ChartTableComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormWidget
    ],
    providers:[],
    exports: [
        ChartTableComponent
    ]
}) 
export class Shared {}