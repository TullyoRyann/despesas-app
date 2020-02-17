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
];

@NgModule({
  declarations: [],
  imports: [
    angularModules,
    primeNgModules
  ],
  exports: [
    angularModules,
    primeNgModules
  ]
})
export class SharedModule { }
