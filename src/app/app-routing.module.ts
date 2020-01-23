import { GoodsIssueComponent } from './goods-issue/goods-issue.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { ManagePackingListComponent } from './manage-packing-list/manage-packing-list.component';
import { PackingSlipCameraComponent } from './packing-slip-camera/packing-slip-camera.component'
import { ManageGoodsIssuePicklistComponent } from './manage-goods-issue-picklist/manage-goods-issue-picklist.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'packingslipcamera', component:PackingSlipCameraComponent },
  { path: 'manageReservations', component: ManageReservationsComponent },
  { path: 'purchaseDetails', component: PurchaseDetailsComponent },
  { path: 'pickList', component: PickListComponent },
  { path: 'managePackingList', component: ManagePackingListComponent },
  { path: 'goods', component: GoodsIssueComponent },
  { path: 'manageGoodsIssue', component: ManageGoodsIssuePicklistComponent}
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
