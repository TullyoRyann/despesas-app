import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaComponent } from './conta.component';
import { ContaRegistrationComponent } from './conta-registration/conta-registration.component';
import { ContaDetailComponent } from './conta-detail/conta-detail.component';
import { Route } from '../shared/enum/route.enum';
import { ContaListingComponent } from './conta-listing/conta-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ContaComponent,
    children: [
      {
        path: Route.CONTAS,
        component: ContaListingComponent
      }
      ,{
        path: Route.GENERICO_CADASTRAR,
        component: ContaRegistrationComponent
      },
      {
        path: Route.CONTA_EDITAR,
        component: ContaDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
