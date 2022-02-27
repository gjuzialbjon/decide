import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecideRoutingModule } from './decide-routing.module';
import { DecideComponent } from './decide/decide.component';
import { StatsComponent } from './components/stats/stats.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RecommendationDetailsComponent } from './views/recommendation-details/recommendation-details.component';
import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  declarations: [
    DecideComponent,
    StatsComponent,
    SidebarComponent,
    RecommendationDetailsComponent,
    ActionsComponent,
  ],
  imports: [CommonModule, DecideRoutingModule],
})
export class DecideModule {}
