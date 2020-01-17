import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecDocComponent } from './rec-doc/rec-doc.component';

import { ButtonRendererComponent } from './renderer/button-renderer.component';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecDocComponent,
    ButtonRendererComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ButtonRendererComponent]
})
export class AppModule { }
