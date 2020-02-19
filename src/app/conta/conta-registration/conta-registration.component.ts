import { Component, OnInit } from '@angular/core';
import { ContaForm } from '../shared/conta.form'
import { Router } from '@angular/router';
import { ContaService } from '../shared/conta.service';
import { ToastService } from '@app/shared/service/toast.service';
import { CrudRegistration } from '@app/shared/component/crud/crud-registration/crud-registration';

@Component({
  selector: 'app-conta-registration',
  templateUrl: './conta-registration.component.html',
  styleUrls: ['./conta-registration.component.css']
})
export class ContaRegistrationComponent extends CrudRegistration {

  protected form = new ContaForm();

  constructor(
    protected router: Router,
    protected contaService: ContaService,
    protected toastService: ToastService
  ) { 
    super(router, contaService, toastService);
  }

  protected redirectToNewRegistry(id: number): void {
    this.router.navigate([`/conta/${id}`]);
  }

}
