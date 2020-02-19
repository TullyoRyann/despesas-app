import { NgModule } from '@angular/core';
import { LancamentoRegistrationComponent } from './lancamento-registration/lancamento-registration.component';
import { SharedModule } from 'primeng/components/common/shared';



@NgModule({
  imports: [
    SharedModule,
    LancamentoModule
  ],
  declarations: [
    LancamentoRegistrationComponent
  ],
})
export class LancamentoModule { }
