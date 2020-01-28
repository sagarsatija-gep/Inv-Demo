import { ExternalStockTransfer } from './external-stock-transfer/externalStockTransfer.component';
import { GoodsIssueComponent } from './goods-issue/goods-issue.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { ManagePackingListComponent } from './manage-packing-list/manage-packing-list.component';
import { PackingSlipCameraComponent } from './packing-slip-camera/packing-slip-camera.component';
import { PackingSlipDetailComponent } from './packing-slip-detail/packing-slip-detail.component';
import { ManageGoodsIssuePicklistComponent } from './manage-goods-issue-picklist/manage-goods-issue-picklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternalStockTransferComponent } from './internal-stock-transfer/internal-stock-transfer.component';
import { PoDetailsComponent } from './po-details/po-details.component';
import { AsnGrComponent } from './asn-gr/asn-gr.component';
import { PoGoodsReceiptComponent } from './po-goods-receipt/po-goods-receipt.component';
import { OcrGrCreationComponent } from './ocr-gr-creation/ocr-gr-creation.component';
import { CreatePackageComponent } from './create-package/create-package.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'packingslipcamera', component: PackingSlipCameraComponent },
  { path: 'manageReservations', component: ManageReservationsComponent },
  { path: 'purchaseDetails', component: PurchaseDetailsComponent },
  { path: 'pickList', component: PickListComponent },
  { path: 'managePackingList', component: ManagePackingListComponent },
  { path: 'goods', component: GoodsIssueComponent },
  { path: 'managePackingSlip/7894563', component: PackingSlipDetailComponent },
  {
    path: 'asn', component: PurchaseDetailsComponent, children: [
      { path: ':id', component: PurchaseDetailsComponent }
    ]
  },
  { path: 'manageGoodsIssue', component: ManageGoodsIssuePicklistComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'internalstocktransfer', component: InternalStockTransferComponent },
  { path: 'poDetails', component: PoDetailsComponent },
  { path: 'asnGoodsReceipt', component: AsnGrComponent },
  { path: 'poGoodsReceipt', component: PoGoodsReceiptComponent },
  { path: 'ocr-gr-creation', component: OcrGrCreationComponent },
  { path: 'createPackage', component: CreatePackageComponent },
  { path: 'externalStockTransfer', component: ExternalStockTransfer}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
