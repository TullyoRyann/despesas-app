import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContaModule } from './conta/conta.module';
import { HomeModule } from './home/home.module';
import { ToastService } from './shared/service/toast.service';
import { MessageService } from 'primeng/api';

registerLocaleData(localept, 'pt');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ContaModule,
    HomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    ToastService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
