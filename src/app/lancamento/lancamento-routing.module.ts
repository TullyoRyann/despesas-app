import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoComponent } from './lancamento.component';
import { LancamentoRegistrationComponent } from './lancamento-registration/lancamento-registration.component';

const routes: Routes = [
  {
    path: '',
    component: LancamentoComponent,
    children: [
      {
        path: '',
        component: LancamentoRegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
