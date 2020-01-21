import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { ManagePackingListComponent } from './manage-packing-list/manage-packing-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'manageReservations', component: ManageReservationsComponent },
  { path: 'purchaseDetails', component: PurchaseDetailsComponent },
  { path: 'pickList', component: PickListComponent },
  { path: 'managePackingList', component: ManagePackingListComponent }
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
