import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { AppRoutingModule } from './app-routing.module';
import { RecDocComponent } from './rec-doc/rec-doc.component';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecDocComponent,
    SideNavComponent,
    ButtonRendererComponent,
    QuickLinksComponent,
    DashboardComponent,
    LineViewComponent,
    ManageReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatSidenavModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent],
  entryComponents: [ButtonRendererComponent]
})
export class AppModule { }
