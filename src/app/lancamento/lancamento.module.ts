import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { LancamentoRegistrationComponent } from './lancamento-registration/lancamento-registration.component';
import { LancamentoComponent } from './lancamento.component';
import { LancamentoRoutingModule } from './lancamento-routing.module';



@NgModule({
  imports: [
    SharedModule,
    LancamentoRoutingModule
  ],
  declarations: [
    LancamentoComponent,
    LancamentoRegistrationComponent
  ],
})
export class LancamentoModule { }
