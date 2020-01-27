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
import { HeaderComponent, NgbdModalContent1 } from './header/header.component';
import { NgbdModalContent } from './packing-slip-camera/packing-slip-camera.component'
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
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
import { PackingSlipDetailComponent } from './packing-slip-detail/packing-slip-detail.component';
import { ScannedDocumentViewComponent } from './scanned-document-view/scanned-document-view.component';
import { ScannedDocumentLineItemsComponent } from './scanned-document-line-items/scanned-document-line-items.component';
import { BarcodeValueService } from './barcode-value.service';
import { ManageGoodsIssuePicklistComponent } from './manage-goods-issue-picklist/manage-goods-issue-picklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { InternalStockTransferComponent } from './internal-stock-transfer/internal-stock-transfer.component';
import { PoDetailsComponent } from './po-details/po-details.component';
import { AsnGrComponent } from './asn-gr/asn-gr.component';
import { PoGoodsReceiptComponent } from './po-goods-receipt/po-goods-receipt.component';
import { PopupComponent } from './popup/popup.component';
import { OcrGrCreationComponent } from './ocr-gr-creation/ocr-gr-creation.component';

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
    PackingSlipDetailComponent,
    ScannedDocumentViewComponent,
    ScannedDocumentLineItemsComponent,
    ManageGoodsIssuePicklistComponent,
    DashboardComponent,
    GoogleMapsComponent,
    InternalStockTransferComponent,
    PoDetailsComponent,
    PoGoodsReceiptComponent,
    PopupComponent,
    AsnGrComponent,
    OcrGrCreationComponent
  ],
  imports: [
    BrowserModule,
    FormWidget,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatSidenavModule,
    MatTabsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    GridModule,
    DialogModule,
    CheckBoxModule,
    BarcodeGeneratorAllModule,
    NgxBarcodeModule,
    BarecodeScannerLivestreamModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRSpfba5rdNqT0RAcD4cvdUaLOk2-Bzic',
      libraries: ['places']
    }),
  ],
  providers: [ToggleService, PageService, SortService, FilterService, GroupService, BarcodeValueService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent, NgbdModalContent1]
})
export class AppModule { }
