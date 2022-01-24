import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignComponent } from './components/campaign/campaign.component';
import { AddComponent } from './components/campaign/add/add.component';
import { UpdateComponent } from './components/campaign/update/update.component';


@NgModule({
  declarations: [NavComponent, DashboardComponent, CampaignComponent, AddComponent, UpdateComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class NavigationModule { }
