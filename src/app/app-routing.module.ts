import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'decide',
    pathMatch: 'full',
  },
  {
    path: 'decide',
    loadChildren: () =>
      import('./decide/decide.module').then((m) => m.DecideModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
