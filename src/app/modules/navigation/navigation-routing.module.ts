import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CampaignComponent } from './components/campaign/campaign.component';


const routes: Routes = [
  {path:'', component: NavComponent, children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'campaign', component: CampaignComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
