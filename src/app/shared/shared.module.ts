import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { NgxCurrencyModule } from "ngx-currency";
import { CustomCurrencyMaskConfig } from './util/currency-mask-util';


const angularModules: Array<Type<any> | any[]> = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const primeNgModules: Array<Type<any> | any[]> = [
  AccordionModule,
  InputTextModule,
  ButtonModule,
  CardModule,
  PanelModule,
  BreadcrumbModule,
  MenuModule,
  ToastModule,
  MultiSelectModule,
  DropdownModule,
  TableModule
];

@NgModule({
  imports: [
    angularModules,
    primeNgModules,
    NgxCurrencyModule.forRoot(CustomCurrencyMaskConfig)
  ],
  exports: [
    angularModules,
    primeNgModules,
    NgxCurrencyModule
  ],
  declarations: []
})
export class SharedModule { }
