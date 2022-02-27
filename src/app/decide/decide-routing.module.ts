import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecideComponent } from './decide/decide.component';
import { RecommendationDetailsComponent } from './views/recommendation-details/recommendation-details.component';

const routes: Routes = [
  {
    path: '',
    component: DecideComponent,
    children: [
      {
        path: '',
        redirectTo: 'recommendation',
        pathMatch: 'full',
      },
      {
        path: 'recommendation',
        children: [
          {
            path: '',
            redirectTo: 'recommendation-details',
            pathMatch: 'full',
          },
          {
            path: 'recommendation-details',
            component: RecommendationDetailsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecideRoutingModule {}
