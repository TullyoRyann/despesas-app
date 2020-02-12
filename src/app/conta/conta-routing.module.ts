import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaComponent } from './conta.component';
import { ContaRegistrationComponent } from './conta-registration/conta-registration.component';
import { ContaDetailComponent } from './conta-detail/conta-detail.component';
import { Route } from '../shared/enum/route.enum';

const routes: Routes = [
  {
    path: '',
    component: ContaComponent,
    children: [
      {
        path: '',
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
