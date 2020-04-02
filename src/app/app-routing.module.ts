import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EssentialServiceComponent } from './essential-service/essential-service.component';
import { HelplineComponent } from './helpline/helpline.component';
import { DailyActivitiesComponent } from './daily-activities/daily-activities.component';
import { FQAComponent } from './fqa/fqa.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'helplines', component: HelplineComponent},
  { path: 'essential', component: EssentialServiceComponent},
  { path: 'activities', component: DailyActivitiesComponent},
  { path: 'fqa', component: FQAComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
