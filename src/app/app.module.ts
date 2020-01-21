import { FormWidget } from './../shared/form-widget/form-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { AppRoutingModule } from './app-routing.module';
import { RecDocComponent } from './rec-doc/rec-doc.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleService } from './toggle.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LineViewComponent } from './line-view/line-view.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { FilterComponent } from './filter/filter.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { PickListComponent } from './pick-list/pick-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecDocComponent,
    SideNavComponent,
    QuickLinksComponent,
    DashboardComponent,
    LineViewComponent,
    ManageReservationsComponent,
    // DialogComponent
    FilterComponent,
    PurchaseDetailsComponent,
    PickListComponent
  ],
  imports: [
    BrowserModule,
    FormWidget,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatSidenavModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    GridModule,
    DialogModule,
    CheckBoxModule 

  ],
  providers: [ToggleService,PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [RecDocComponent]
})
export class AppModule { }
