import { NgModule } from '@angular/core';

import { ContaRoutingModule } from './conta-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContaRegistrationComponent } from './conta-registration/conta-registration.component';
import { ContaDetailComponent } from './conta-detail/conta-detail.component';
import { ContaComponent } from './conta.component';
import { ContaListingComponent } from './conta-listing/conta-listing.component';

@NgModule({
  imports: [
    SharedModule,
    ContaRoutingModule
  ],
  declarations: [
    ContaComponent,
    ContaRegistrationComponent,
    ContaDetailComponent,
    ContaListingComponent
  ],
})
export class ContaModule { }
