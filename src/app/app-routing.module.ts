import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from './shared/enum/route.enum';


const routes: Routes = [
  {
    path: '',
    redirectTo: Route.HOME,
    pathMatch: 'full'
  },
  {
    path: Route.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
  , {
    path: Route.CONTA,
    loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
