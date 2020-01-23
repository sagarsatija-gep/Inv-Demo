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
import { HeaderComponent, NgbdModalContent1} from './header/header.component';
import { NgbdModalContent } from './packing-slip-camera/packing-slip-camera.component'
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { ToggleService } from './toggle.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LineViewComponent } from './line-view/line-view.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { FilterComponent } from './filter/filter.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { BarcodeGeneratorAllModule, QRCodeGeneratorAllModule, DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
import { NgxBarcodeModule } from 'ngx-barcode';

import { ManagePackingListComponent } from './manage-packing-list/manage-packing-list.component';
import { UnprocessedPackingSlipsComponent } from './unprocessed-packing-slips/unprocessed-packing-slips.component';
import { PackingSlipsTabComponent } from './packing-slips-tab/packing-slips-tab.component';
import { GoodsIssueComponent } from './goods-issue/goods-issue.component';
import { PackingSlipCameraComponent } from './packing-slip-camera/packing-slip-camera.component';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ManageGoodsIssuePicklistComponent } from './manage-goods-issue-picklist/manage-goods-issue-picklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecDocComponent,
    SideNavComponent,
    QuickLinksComponent,
    HomeComponent,
    LineViewComponent,
    ManageReservationsComponent,
    // DialogComponent
    FilterComponent,
    PurchaseDetailsComponent,
    NgbdModalContent,
    NgbdModalContent1,
    ManagePackingListComponent,
    UnprocessedPackingSlipsComponent,
    PackingSlipsTabComponent,
    PickListComponent,
    GoodsIssueComponent,
    PackingSlipCameraComponent,
    
    FilterComponent,
    
    ManageGoodsIssuePicklistComponent
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
    CheckBoxModule,
    BarcodeGeneratorAllModule,
    NgxBarcodeModule,
    BarecodeScannerLivestreamModule
  ],
  providers: [ToggleService, PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent,NgbdModalContent1]
})
export class AppModule { }
