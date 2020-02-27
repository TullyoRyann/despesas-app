import { Component, OnInit } from '@angular/core';
import { LancamentoForm } from '../shared/lancamento.form';
import { TipoLancamentoList } from '../shared/tipo-lancamento-list.model';
import { ContaService } from '@app/conta/shared/conta.service';
import { Conta } from '@app/conta/shared/conta';
import { CrudRegistration } from '@app/shared/component/crud/crud-registration/crud-registration';
import { Router } from '@angular/router';
import { ToastService } from '@app/shared/service/toast.service';
import { LancamentoService } from '../shared/lancamento.service';

@Component({
  selector: 'app-lancamento-registration',
  templateUrl: './lancamento-registration.component.html',
  styleUrls: ['./lancamento-registration.component.css']
})
export class LancamentoRegistrationComponent extends CrudRegistration implements OnInit {

  protected form = new LancamentoForm();
  protected tipos = TipoLancamentoList;
  protected contas: Conta[];

  constructor(
    protected router: Router,
    protected lancamentoService: LancamentoService,
    protected toastService: ToastService,
    protected contaService: ContaService,
  ) {
    super(router, lancamentoService, toastService);
  }

  ngOnInit() {
    this.getContas();
  }

  getContas(): void {
    this.contaService.findAll().subscribe(response => {
      this.contas = response.data;
    });
  }

}
