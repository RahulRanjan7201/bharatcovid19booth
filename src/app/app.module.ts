import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
import { EssentialServiceComponent } from './essential-service/essential-service.component';
import { NearByComponent } from './near-by/near-by.component'
import { HelplineComponent } from './helpline/helpline.component';
import { DailyActivitiesComponent } from './daily-activities/daily-activities.component';
import { FQAComponent } from './fqa/fqa.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    EssentialServiceComponent,
    NearByComponent,
    HelplineComponent,
    DailyActivitiesComponent,
    FQAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
