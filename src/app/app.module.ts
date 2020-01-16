import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecDocComponent } from './rec-doc/rec-doc.component';

import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    RecDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
