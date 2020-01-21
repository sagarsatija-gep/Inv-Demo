import { GoodsIssueComponent } from './goods-issue/goods-issue.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { ManagePackingListComponent } from './manage-packing-list/manage-packing-list.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'manageReservations', component: ManageReservationsComponent },
  { path: 'purchaseDetails', component: PurchaseDetailsComponent },
  { path: 'pickList', component: PickListComponent },
  { path: 'managePackingList', component: ManagePackingListComponent },
  { path: 'goods', component: GoodsIssueComponent }
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
