import { FormWidget } from './../shared/form-widget/form-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormWidget
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
